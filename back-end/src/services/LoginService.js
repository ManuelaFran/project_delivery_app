const md5 = require('md5');
const { User } = require('../database/models');
const jwt = require('./utils/jwt');

class LoginService {
    constructor() {
        this.user = User;
    }

    async login(obj) {
        const { email, password } = obj;
        const hash = md5(password);
        const result = await this.user.findOne({ where: { email, password: hash } });
        if (!result) {
            const err = new Error('Email or password not found');
            err.name = 'notFound';
            throw err;
        }
        const token = jwt.sing(result);
        return token;
    }
}

module.exports = LoginService;