const userService = require('../services/UserService');

const validateUserExists = async (req, _res, next) => {
  const { email } = req.body;
  const user = await userService.findOneEmail(email);
  console.log(user);
  if (user) {
    const err = new Error('User already registered');
    err.name = 'ConflictError';
    throw err;
  }
  return next();
};

module.exports = {
    validateUserExists,
};