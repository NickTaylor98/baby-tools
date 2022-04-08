const axios = require('../config/axios');

class Parser {
    constructor(url, ids, parse, headers, sendRequest) {
        this.url = url;
        this.ids = ids;
        this.parse = parse;
        this.headers = headers;

        this.sendRequest = sendRequest;
    }

    async getData() {
        const responses = await Promise.all((this.ids ?? []).map(id => {
            return !this.sendRequest ?
                axios.get(`${this.url}${id}`, {headers: this.headers}) :
                this.sendRequest(this.url, id);
        }));
        return responses;
    }

    async getPrices() {
        const responses = await this.getData();

        return responses.map(this.parse);
    }
}

module.exports = Parser;