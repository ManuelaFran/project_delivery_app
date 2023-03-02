const jwt = require('jsonwebtoken');

module.exports = {
    sing: (obj) => {
        const { password, ...publicInfo } = obj;
        return jwt.sign(publicInfo, 'secret_key');
    },
};