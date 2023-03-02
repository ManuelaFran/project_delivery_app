const md5 = require('md5');
const { User } = require('../database/models');
const jwt = require('../utils/jwt');

const findOneEmail = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user;
};

const createUser = async ({ email, name, password, role = 'customer' }) => {
  const hash = md5(password);
  const newUser = await User.create({ email, name, role, password: hash });
  if (!newUser) {
    const err = new Error('It was not possible to register user');
    err.name = 'InternalServerError';
  }
  const user = await findOneEmail(email);
  return jwt.sing({ email: user.email, name: user.name, role: user.role });
};

module.exports = {
  createUser,
  findOneEmail,
};
