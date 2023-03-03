const userService = require('../services/UserService');

const createUser = async (req, res) => {
  const user = await userService.createUser(req.body);
  return res.status(201).json({ ...user });
};

module.exports = {
    createUser,
};