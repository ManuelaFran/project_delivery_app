const userService = require('../services/UserService');

const createUser = async (req, res) => {
  const user = await userService.createUser(req.body);
  return res.status(201).json({ ...user });
};

const findAllSellers = async (_req, res) => {
  const users = await userService.findAllSellers();
  return res.status(200).json(users);
};

module.exports = {
    createUser,
    findAllSellers,
};