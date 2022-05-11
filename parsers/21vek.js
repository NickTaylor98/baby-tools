const Parser = require('./index');
const htmlParser = require('node-html-parser');

const {defaultPrice} = require("../config/defaults");
const {_21Vek} = require("../config/market");

const url = 'https://www.21vek.by/';

const parse = (response) => {
    const data = response.data;

    const root = htmlParser.parse(data);

    const priceElement = root.querySelector('[itemprop="price"]');

    if (!priceElement) {
        return {...defaultPrice, market: _21Vek};
    }

    const price = priceElement.childNodes?.[0]?._rawText;

    if (!price) {
        return {...defaultPrice, market: _21Vek};
    }

    const [roubles, cents] = price.split(',');

    return {
        roubles: parseInt(roubles),
        cents: parseInt(cents),
        market: _21Vek,
    };
}

const _21VekParser = (ids) => new Parser(url, ids, parse);

module.exports = _21VekParser;
