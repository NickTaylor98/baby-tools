const Parser = require('./index');

const {defaultPrice} = require("../config/defaults");
const {DetskiyMir} = require("../config/market");

const url = 'https://api.by.detmir.com/v2/products/';

const parse = (response) => {
    const data = response.data;

    const price = data?.item?.price?.price;

    if (!price) {
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
