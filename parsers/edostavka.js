const Parser = require("./index");
const htmlParser = require("node-html-parser");
const { defaultPrice } = require("../config/defaults");
const { EDostavka } = require("../config/market");
const axios = require("../config/axios");

const URL = "https://api.static.edostavka.by/rest/Json";

const sendRequest = async (url, id) => {
  const response = await axios.post(
    url,
    {
      Packet: {
        MethodName: "EMark.GetListing",
        JWT: null,
        ServiceNumber: "01093ABC-6B36-450D-8FAF-EA32BCC2EAE8",
        Data: {
          Limit: 20,
          ProductId: [id],
          SessionGuid: "4FB6A39C-90D4-433A-956F-5B388760415F",
        },
      },
      CRC: "",
    },
    {
      headers: {
        accept: "*/*",
        "accept-language": "ru-RU,ru;q=0.9",
        "cache-control": "no-cache",
        "content-type": "text/plain;charset=UTF-8",
        pragma: "no-cache",
        "sec-ch-ua":
          '"Not?A_Brand";v="8", "Chromium";v="108", "Google Chrome";v="108"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Linux"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-site",
        origin: "https://www.edostavka.by",
        referer: `https://edostavka.by/product/${id}`,
      },
    }
  );
  return response;
};

const parse = (response) => {
  const data = response.data;

  const product = data?.Table?.[0]?.Products?.[0];

  if (!product) {
    return { ...defaultPrice, market: EDostavka };
  }

  const price = product.Price?.[0]?.Price;

  if (!price) {
    return { ...defaultPrice, market: EDostavka };
  }

  const [roubles, cents] = price.toString().split(".");
  return {
    roubles: parseInt(roubles),
    cents: parseInt(cents.length === 1 ? cents + "0" : cents),
    market: EDostavka,
  };
};

const eDostavkaParser = (ids) =>
  new Parser(URL, ids, parse, undefined, sendRequest);

module.exports = eDostavkaParser;
