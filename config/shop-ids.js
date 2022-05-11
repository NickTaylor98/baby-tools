const Nestogen = require('./products/nestogen');
const Pampers = require('./products/pampers');
const Romax = require('./products/romax');
const Neposeda = require('./products/neposeda');
const Frutonyanya = require('./products/frutonyanya');
const Gerber = require('./products/gerber');
const Fairy = require('./products/fairy');

const productsMap = {
    Nestogen,
    Pampers,
    Romax,
    Neposeda,
    Frutonyanya,
    Gerber,
    Fairy
}


module.exports = productsMap;
