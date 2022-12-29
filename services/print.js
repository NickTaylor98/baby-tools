const wildBerriesParser = require("../parsers/wildberries");
const MarketPlace = require("../config/market");
const _21VekParser = require("../parsers/21vek");
const eDostavkaParser = require("../parsers/edostavka");
const ostrovShopParser = require("../parsers/ostrovshop");
const milaParser = require("../parsers/mila");
const buslikParser = require("../parsers/buslik");
const detskiyMirParser = require("../parsers/detskiymir");
const ozonParser = require("../parsers/ozon");
const gippoParser = require("../parsers/gippo");
const greenParser = require("../parsers/green");
const _7745Parser = require("../parsers/7745");
const emallParser = require("../parsers/emall");
const mamantenokParser = require("../parsers/mamantenok");

const _ = require("lodash");
const MarketName = require("../config/marketname");

module.exports = async (shopIds) => {
  if (!shopIds) {
    return;
  }

  const prices = await Promise.allSettled([
    wildBerriesParser(shopIds[MarketPlace.Wildberries]).getPrices(),
    _21VekParser(shopIds[MarketPlace._21Vek]).getPrices(),
    eDostavkaParser(shopIds[MarketPlace.EDostavka]).getPrices(),
    ostrovShopParser(shopIds[MarketPlace.Ostrov]).getPrices(),
    milaParser(shopIds[MarketPlace.Mila]).getPrices(),
    buslikParser(shopIds[MarketPlace.Buslik]).getPrices(),
    detskiyMirParser(shopIds[MarketPlace.DetskiyMir]).getPrices(),
    ozonParser(shopIds[MarketPlace.Ozon]).getPrices(),
    gippoParser(shopIds[MarketPlace.Gippo]).getPrices(),
    greenParser(shopIds[MarketPlace.Green]).getPrices(),
    _7745Parser(shopIds[MarketPlace._7745]).getPrices(),
    emallParser(shopIds[MarketPlace.Emall]).getPrices(),
    mamantenokParser(shopIds[MarketPlace.Mamantenok]).getPrices(),
  ]);

  _.sortBy(
    prices
      .filter((price) => price.status === "fulfilled")
      .map((price) => price.value)
      .flat()
      .filter((price) => price.roubles),
    ["roubles", "cents"]
  ).forEach((price) =>
    console.log(
      `Цена: ${price.roubles}р. ${price.cents}к. в магазине "${
        MarketName[price.market]
      }"`
    )
  );
};
