const md5 = require('md5');
const { User } = require('../database/models');
const { createToken } = require('../utils/jwt');

const login = async ({ password, email }) => {
  const hash = md5(password);
  const result = await User.findOne({ where: { email, password: hash }, raw: true });
  if (!result) {
    const err = new Error('Email or password not found');
    err.name = 'NotFoundError';
    throw err;
  }
  const token = createToken({
    name: result.name, email: result.email, role: result.role,
  });
  return {
    id: result.id,
    name: result.name,
    email: result.email,
    role: result.role,
    token,
  };
};

module.exports = {
  login,
};
