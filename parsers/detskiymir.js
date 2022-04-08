const Parser = require('./index');
const htmlParser = require('node-html-parser');

const {defaultPrice} = require("../config/defaults");
const {DetskiyMir} = require("../config/market");

const url = 'https://by.detmir.com/product/index/id/';

const parse = (response) => {
    const data = response.data;

    const root = htmlParser.parse(data);

    const priceElement = root.querySelector('.Co');

    if (!priceElement) {
        return {...defaultPrice, market: DetskiyMir};
    }

    const price = parseFloat((priceElement.childNodes?.[0]?._rawText || '').replace(',', '.'));

    if (isNaN(price)) {
        return {...defaultPrice, market: DetskiyMir};
    }

    const [roubles, cents] = price.toFixed(2).split('.');

    return {
        roubles: parseInt(roubles),
        cents: parseInt(cents.length === 1 ? cents + '0' : cents),
        market: DetskiyMir,
    };
}

const detskiyMirParser = (ids) => new Parser(url, ids, parse);

module.exports = detskiyMirParser;