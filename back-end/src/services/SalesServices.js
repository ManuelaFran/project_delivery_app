const { Sale, SaleProduct } = require('../database/models');
const { adjustHours } = require('../utils/adjustHours');

const createSaleProduct = async (products, id) => {
  await Promise.all(
    products.map(async (product) => {
      const newSaleProduct = {
        productId: product.id,
        saleId: id,
        quantity: product.quantity,
      };
      await SaleProduct.create(newSaleProduct);
    }),
  );
};

const createSale = async (data) => {
  const saleAndDate = {
    ...data,
    saleDate: adjustHours(),
    status: !data.status ? 'Pendente' : data.status,
};
  const newSale = await Sale.create({ ...saleAndDate });
  if (!newSale) {
    const err = new Error('It was not possible to register the sale');
    err.name = 'InternalServerError';
    throw err;
  }
  await createSaleProduct(data.products, newSale.dataValues.id);
  return newSale;
};

module.exports = {
  createSale,
};
