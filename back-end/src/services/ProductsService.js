const { Product } = require('../database/models');

const findAll = async () => {
    const products = await Product.findAll();
    return products;
}

module.exports = {
    findAll,
}