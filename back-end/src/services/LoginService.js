const md5 = require('md5');
const { User } = require('../database/models');
const jwt = require('../utils/jwt');

const login = async ({ password, email }) => {
  const hash = md5(password);
  const result = await User.findOne({
    where: { email, password: hash },
    raw: true,
  });
  if (!result) {
    const err = new Error('Email or password not found');
    err.name = 'NotFoundError';
    throw err;
  }
  const token = jwt.sing({ name: result.name, email: result.email, role: result.role });
  return token;
};

module.exports = {
    login,
};
