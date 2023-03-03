const jwt = require('jsonwebtoken');
const fs = require('fs');

const secret = fs.readFileSync('jwt.evaluation.key', { encoding: 'utf8' });

module.exports = {
  verify: (token) => jwt.verify(token, secret),
};
