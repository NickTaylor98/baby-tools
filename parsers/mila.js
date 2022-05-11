const Parser = require('./index');
const axios = require('../config/axios');

const {defaultPrice} = require("../config/defaults");
const {Mila} = require("../config/market");

const url = 'https://api.mila.by/get-all-offer/';

const sendRequest = async (url, id) => {
    const response = await axios.post(url, {product_id: id, storeId: 1});
    return response;
}

const parse = (response) => {
    const data = response.data;

    const PRICES = data?.offer?.PRICES;

    const isAvailable = !!PRICES?.CAN_BUY;

    if (!isAvailable) {
        return {...defaultPrice, market: Mila};
    }

    const price = PRICES?.PRICE;

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
