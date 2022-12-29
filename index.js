const productsMap = require("./config/shop-ids");

const print = require("./services/print");
const compare = require("./services/compare");

(async () => {
  const shopIds = productsMap.Nestogen[3][900];

  if (!shopIds) {
    return;
  }

  await print(shopIds);
})();
