const { verifyToken } = require('../utils/jwt');

const validate = (req, _res, next) => {
  const token = req.headers.authorization;
  
  if(!token) {
    const err = new Error('unauthorized client')
    err.name = 'UnauthorizedError';
    throw err;
  }
  verifyToken(token);
  return next();
}

module.exports = {
    validate,
}