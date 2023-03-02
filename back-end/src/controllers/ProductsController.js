const productsService = require("../services/ProductsService");

const findAll = async (req, res) => {
  const products = await productsService.findAll();
  return res.status(200).json(products);
};

module.exports = {
    findAll,
}