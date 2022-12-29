const Parser = require("./index");
const htmlParser = require("node-html-parser");
const { defaultPrice } = require("../config/defaults");
const { Emall } = require("../config/market");

const URL = "https://emall.by/catalog/";
const headers = {
  accept: "*/*",
  "accept-language": "ru-RU,ru;q=0.9",
  "cache-control": "no-cache",
  pragma: "no-cache",
  "sec-ch-ua":
    '" Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"',
  "sec-ch-ua-mobile": "?0",
  "sec-ch-ua-platform": '"Linux"',
  "sec-fetch-dest": "empty",
  "sec-fetch-mode": "cors",
  "sec-fetch-site": "same-origin",
  "x-requested-with": "XMLHttpRequest",
  Referer: "https://emall.by/",
  "Referrer-Policy": "strict-origin-when-cross-origin",
};

const parse = (response) => {
  const data = response.data;

  const root = htmlParser.parse(data);

  const priceElement = root.querySelector('meta[itemprop="price"]');

  if (!priceElement) {
    return { ...defaultPrice, market: Emall };
  }

  const content = priceElement._rawAttrs?.content;

  if (!content) {
    return { ...defaultPrice, market: Emall };
  }

  const price = parseFloat(content);

  if (isNaN(price)) {
    return { ...defaultPrice, market: Emall };
  }

  const [roubles, cents] = price.toString().split(".");
  return {
    roubles: parseInt(roubles),
    cents: parseInt(cents.length === 1 ? cents + "0" : cents),
    market: Emall,
  };
};

const emallParser = (ids) => new Parser(URL, ids, parse, headers);

module.exports = emallParser;
