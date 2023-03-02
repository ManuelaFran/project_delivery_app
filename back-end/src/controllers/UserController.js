const userService = require('../services/UserService');

const createUser = async (req, res) => {
  const token = await userService.createUser(req.body);
  return res.status(201).json({ token });
};

module.exports = {
    createUser,
};