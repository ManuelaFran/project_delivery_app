const salesService = require('../services/SalesServices');

const createSale = async (req, res) => {
  const sale = await salesService.createSale(req.body);
  return res.status(201).json(sale);
};

module.exports = {
  createSale,
};
