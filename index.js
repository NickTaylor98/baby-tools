const productsMap = require('./config/shop-ids');

const print = require('./services/print');
const compare = require('./services/compare');

(async () => {

    const shopIds = productsMap.Fairy.DishSoap["450"];

    if (!shopIds) {
        return;
    }

    await compare(shopIds);

})();

