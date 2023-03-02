// const md5 = require('md5');

class UserController {
    constructor(service) {
        this.service = service;
        this.create = this.create.bind(this);
    }

    async findAll(_req, res) {
        const users = await this.service.findAll();
        res.status(200).json(users);
    }

    async create(req, res) {
      await this.service.create(req.body);
      res.status(201).send();
    }
}

module.exports = UserController;