const Parser = require('./index');
const {defaultPrice} = require("../config/defaults");
const {Green} = require("../config/market");
const axios = require("../config/axios");

const url = 'https://green-dostavka.by/api/v1/products/';

const sendRequest = (url, id) => {
    const response = axios.get(`${url}${id}`, {params: {storeId: 2}});
    return response;
}

const parse = (response) => {
    const data = response.data;

    const price = data.storeProduct?.priceWithSale;

    if (!price) {
        return {...defaultPrice, market: Green};
    }

    const cents = price % 100;
    const roubles = (price - cents) / 100;

    return {
        roubles,
        cents,
        market: Green,
    };
}

const greenParser = (ids) => new Parser(url, ids, parse, null, sendRequest);

module.exports = greenParser;