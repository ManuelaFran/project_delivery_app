const md5 = require('md5');
const { User } = require('../database/models');
const { createToken } = require('../utils/jwt');

const findOneEmail = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user;
};

const findAllSellers = async () => {
  const users = await User.findAll({ where: { role: 'seller' } });
  return users;
};

const createUser = async ({ email, name, password, role = 'customer' }) => {
  const hash = md5(password);
  const newUser = await User.create({ email, name, role, password: hash });
  if (!newUser) {
    const err = new Error('It was not possible to register user'); 
    err.name = 'InternalServerError';
    throw err;
  }
  const user = await findOneEmail(email);
  const token = createToken({ email: user.email, name: user.name, role: user.role });
  return { email: user.email, name: user.name, role: user.role, token, id: user.id };
};

module.exports = {
  createUser,
  findOneEmail,
  findAllSellers,
};
