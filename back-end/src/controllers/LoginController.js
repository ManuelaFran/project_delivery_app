const loginService = require('../services/LoginService');

const login = async (req, res) => {
  const token = await loginService.login(req.body);
  return res.status(200).json({ token });
};

module.exports = {
    login,
};
