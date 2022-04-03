const Parser = require('./index');
const {defaultPrice} = require("../config/defaults");
const {Wildberries} = require("../config/market");

const WildBerriesURL = 'https://wbxcatalog-sng.wildberries.ru/nm-2-card/catalog?spp=22&regions=69,86,83,4,30,70,22,66,68,82,48,1,40,80&stores=119261,122252,122256,121631,122466,122467,122495,122496,122498,122590,122591,122592,123816,123817,123818,123820,123821,123822,124096,124097,124098,143772,121700,117393,117501,507,3158,120762,159402,2737,130744,117986&pricemarginCoeff=1&reg=1&appType=1&offlineBonus=0&onlineBonus=0&emp=0&locale=by&lang=ru&curr=&couponsGeo=12,7,3,21&dest=12358386,12358404&nm=';

const parse = (response) => {
    const price = response.data?.data?.products?.[0]?.salePriceU;

    if (!price) {
        return {...defaultPrice, market: Wildberries};
    }

    const cents = price % 100;
    const roubles = (price - cents) / 100;

    return {
        roubles,
        cents,
        market: Wildberries,
    }
}

const wildberriesParser = (ids) => new Parser(WildBerriesURL, ids, parse);

module.exports = wildberriesParser;