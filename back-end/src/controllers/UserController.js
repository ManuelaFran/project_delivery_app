const md5 = require('md5');

class UserController {
    constructor(service) {
        this.service = service;
        this.findAll = this.findAll.bind(this);
    }

    async findAll(_req, res) {
        const users = await this.service.findAll();
        console.log(md5('--adm2@21!!--'))
        res.status(200).json(users);
    }
}

module.exports = UserController;