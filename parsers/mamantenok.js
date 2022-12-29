const Parser = require("./index");
const htmlParser = require("node-html-parser");

const { defaultPrice } = require("../config/defaults");
const { Mamantenok } = require("../config/market");

const url = "https://mamantenok.shop.by/";

const parse = (response) => {
  const data = response.data;

  const root = htmlParser.parse(data);

  const productElement = root.querySelector('[itemprop="price"]');

  if (!productElement) {
    return { ...defaultPrice, market: Mamantenok };
  }

  const price = parseFloat(productElement._attrs?.content);

  if (isNaN(price)) {
    return { ...defaultPrice, market: Mamantenok };
  }

  const [roubles, cents] = price.toFixed(2).split(".");

  return {
    roubles: parseInt(roubles),
    cents: parseInt(cents.length === 1 ? cents + "0" : cents),
    market: Mamantenok,
  };
};

const mamantenokParser = (ids) => new Parser(url, ids, parse);

module.exports = mamantenokParser;
