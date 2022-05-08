const Parser = require('./index');
const htmlParser = require('node-html-parser');

const {defaultPrice} = require("../config/defaults");
const {Ostrov} = require("../config/market");

const url = 'https://ostrov-shop.by/catalog/';

const parse = (response) => {
    const data = response.data;

    const root = htmlParser.parse(data);

    const priceElement = root.querySelector('.price_value');

    if (!priceElement) {
        return {...defaultPrice, market: Ostrov};
    }

    const price = parseFloat(priceElement.childNodes?.[0]?._rawText);

    if (isNaN(price)) {
        return {...defaultPrice, market: Ostrov};
    }

    const [roubles, cents] = price.toString().split('.');


    return {
        roubles: parseInt(roubles),
        cents: parseInt(cents.length === 1 ? cents + '0' : cents),
        market: Ostrov,
    };
}

const ostrovShopParser = (ids) => new Parser(url, ids, parse);

module.exports = ostrovShopParser;
