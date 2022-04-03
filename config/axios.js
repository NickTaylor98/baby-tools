const axios = require('axios');
const https = require("https");

const agent = new https.Agent({
    rejectUnauthorized: false
});

axios.defaults.httpsAgent = agent;

module.exports = axios;