const jwt = require('jsonwebtoken');

const secret = 'secret_key';

const jwtConfig = {
  algorithm: 'HS256',
  expiresIn: '2h',
};

const createToken = (user) => {
  const token = jwt.sign({ data: user }, secret, jwtConfig);
  return token;
};

const verifyToken = (token) => {
  try {
    const payload = jwt.verify(token, secret);
    return payload;
  } catch (error) {
    error.name = 'UnauthorizedError';
    error.message = 'unauthorized client';
    throw error;
  }
};

module.exports = {
  createToken,
  verifyToken,
};
