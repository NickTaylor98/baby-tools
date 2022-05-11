const Parser = require('./index');
const htmlParser = require('node-html-parser');

const {defaultPrice} = require("../config/defaults");
const {Ozon} = require("../config/market");

const url = 'https://www.ozon.ru/product/';

const parse = (response) => {
    const data = response.data;

    const root = htmlParser.parse(data);

    const priceElement = root.querySelector('.z5k, .kz6');

    if (!priceElement) {
        return {...defaultPrice, market: Ozon};
    }

    const price = parseFloat((priceElement.childNodes?.[0]?.childNodes?.[0]?._rawText || '').replace(',', '.'));

    if (isNaN(price)) {
        return {...defaultPrice, market: Ozon};
    }

    const [roubles, cents] = price.toString().split('.');

    return {
        roubles: parseInt(roubles),
        cents: parseInt(cents.length === 1 ? cents + '0' : cents),
        market: Ozon,
    };
}

const ozonParser = (ids) => new Parser(url, ids, parse);

module.exports = ozonParser;
