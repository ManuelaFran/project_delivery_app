const { User } = require('../database/models');

class UserService {
    constructor() {
        this.users = User;
    }
    async findAll() {
        const users = await this.users.findAll();
        return users;
    }
}

module.exports = UserService;