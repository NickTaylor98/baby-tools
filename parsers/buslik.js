const Parser = require('./index');
const htmlParser = require('node-html-parser');

const {defaultPrice} = require("../config/defaults");
const {Buslik} = require("../config/market");

const url = 'https://buslik.by/catalog/podguzniki/trusiki_podguzniki/';

const parse = (response) => {
    const data = response.data;

    const root = htmlParser.parse(data);

    const priceElement = root.querySelector('.total-price');

    if (!priceElement) {
        return {...defaultPrice, market: Buslik};
    }

    const price = parseFloat(priceElement.childNodes?.[0]?._rawText);

    if (isNaN(price)) {
        return {...defaultPrice, market: Buslik};
    }

    const [roubles, cents] = price.toString().split('.');


    return {
        roubles: parseInt(roubles),
        cents: parseInt(cents.length === 1 ? cents + '0' : cents),
        market: Buslik,
    };
}

const buslikParser = (ids) => new Parser(url, ids, parse);

module.exports = buslikParser;