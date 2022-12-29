const Parser = require("./index");
const { defaultPrice } = require("../config/defaults");
const { Wildberries } = require("../config/market");

const WildBerriesURL =
  "https://card.wb.ru/cards/detail?spp=33&regions=80,83,4,33,70,69,86,30,40,48,1,66,31,68,22&pricemarginCoeff=1&reg=1&appType=1&emp=0&locale=by&lang=ru&curr=byn&couponsGeo=12,7,3,6,21&sppFixGeo=4&dest=12358386,12358407,-70814,-5598615&__tmp=by&nm=";

const parse = (response) => {
  const price = response.data?.data?.products?.[0]?.salePriceU;

  if (!price) {
    return { ...defaultPrice, market: Wildberries };
  }

  const cents = price % 100;
  const roubles = (price - cents) / 100;

  return {
    roubles,
    cents,
    market: Wildberries,
  };
};

const wildberriesParser = (ids) => new Parser(WildBerriesURL, ids, parse);

module.exports = wildberriesParser;
