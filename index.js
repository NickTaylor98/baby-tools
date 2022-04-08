const _ = require('lodash');

const wildBerriesParser = require('./parsers/wildberries');
const _21VekParser = require('./parsers/21vek');
const eDostavkaParser = require('./parsers/edostavka');
const ostrovShopParser = require('./parsers/ostrovshop');
const milaParser = require('./parsers/mila');
const buslikParser = require('./parsers/buslik');
const detskiyMirParser = require('./parsers/detskiymir');
const ozonParser = require('./parsers/ozon');
const gippoParser = require('./parsers/gippo');

const pampersMap = require('./config/shop-ids');
const MarketPlace = require("./config/market");
const MarketName = require("./config/marketname");

(async () => {
    const pampersType = '4-76';

    const shopIds = pampersMap.Pampers.PremiumCare[pampersType];

    if (!shopIds) {
        return;
    }

    const prices = await Promise.all([
        wildBerriesParser(shopIds[MarketPlace.Wildberries]).getPrices(),
        _21VekParser(shopIds[MarketPlace._21Vek]).getPrices(),
        eDostavkaParser(shopIds[MarketPlace.EDostavka]).getPrices(),
        ostrovShopParser(shopIds[MarketPlace.Ostrov]).getPrices(),
        milaParser(shopIds[MarketPlace.Mila]).getPrices(),
        buslikParser(shopIds[MarketPlace.Buslik]).getPrices(),
        detskiyMirParser(shopIds[MarketPlace.DetskiyMir]).getPrices(),
        ozonParser(shopIds[MarketPlace.Ozon]).getPrices(),
        gippoParser(shopIds[MarketPlace.Gippo]).getPrices(),
    ]);


    console.log(`Тип: Трусики Pampers Premium Care ${pampersType}`);
    _.sortBy(prices.flat().filter(price => price.roubles), ['roubles', 'cents'])
        .forEach(price => console.log(`Цена: ${price.roubles}р. ${price.cents}к. в магазине "${MarketName[price.market]}"`));
})();

