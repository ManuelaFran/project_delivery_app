const loginService = require('../services/LoginService');

const login = async (req, res) => {
  const user = await loginService.login(req.body);
  return res.status(200).json(user);
};

module.exports = {
    login,
};
