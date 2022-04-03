const Parser = require('./index');
const axios = require('../config/axios');

const {defaultPrice} = require("../config/defaults");
const {Mila} = require("../config/market");

const url = 'https://api.mila.by/get-all-offer/';

const sendRequest = (url, id) => {
    const response = axios.post(url, {product_id: id});
    return response;
}

const parse = (response) => {
    const data = response.data;

    const price = data?.offer?.PRICES?.PRICE;

    if (!price) {
        return {...defaultPrice, market: Mila}
    }

    const roubles = price.INT_PART;
    const cents = price.FRACTIONAL_PART;

    return {
        roubles,
        cents,
        market: Mila,
    };
}

const milaShopParser = (ids) => new Parser(url, ids, parse, null, sendRequest);

module.exports = milaShopParser;