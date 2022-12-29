const Parser = require('./index');
const htmlParser = require('node-html-parser');

const {defaultPrice} = require("../config/defaults");
const {Gippo} = require("../config/market");

const url = 'https://gippo-market.by/catalog/';

const parse = (response) => {
    const data = response.data;

    const root = htmlParser.parse(data);

    const productElement = root.querySelector('.product-page__info-top');

    if (!productElement) {
        return {...defaultPrice, market: Gippo};
    }

    const priceElement = productElement.querySelector('.price');

    if (!priceElement) {
        return {...defaultPrice, market: Gippo};
    }

    const price = parseFloat(priceElement.childNodes?.[0]?._rawText);

    if (isNaN(price)) {
        return {...defaultPrice, market: Gippo};
    }

    const [roubles, cents] = price.toFixed(2).split('.');

    return {
        roubles: parseInt(roubles),
        cents: parseInt(cents.length === 1 ? cents + '0' : cents),
        market: Gippo,
    };
}

const gippoParser = (ids) => new Parser(url, ids, parse);

module.exports = gippoParser;
