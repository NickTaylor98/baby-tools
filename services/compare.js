const print = require('./print');

module.exports = function (node) {
    const ids = Object.keys(node).reduce((result, key) => {
        const shopIds = node[key];
        const shopKeys = Object.keys(shopIds);

        shopKeys.forEach((shopKey) => {
            result[shopKey] = (result[shopKey] ?? []).concat(shopIds[shopKey]);
        });

        return result;
    }, {});

    return print(ids);
}
