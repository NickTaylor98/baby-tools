const Parser = require('./index');

const {defaultPrice} = require("../config/defaults");
const {_7745} = require("../config/market");

const url = 'https://7745.by/site-search-get-item?contentType=2&id=';

const parse = (response) => {
    const data = response.data;

    const item = data?.item;

    const priceValue = item?.salePrice || item?.price;

    if (!priceValue) {
        return {...defaultPrice, market: _7745};
    }

    const price = parseFloat(priceValue);

    if (isNaN(price)) {
        return {...defaultPrice, market: _7745};
    }

    const [roubles, cents] = price.toFixed(2).split('.');

    return {
        roubles: parseInt(roubles),
        cents: parseInt(cents.length === 1 ? cents + '0' : cents),
        market: _7745,
    };
}

const _7745Parser = (ids) => new Parser(url, ids, parse);

module.exports = _7745Parser;
