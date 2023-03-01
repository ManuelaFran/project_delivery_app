const { User } = require("../database/models");
const md5 = require("md5");
const jwt = require("../utils/jwt");

class UserService {
  constructor() {
    this.users = User;
  }
  async findAll() {
    const users = await this.users.findAll();
    return users;
  }

  async findOne(email) {
    const user = await this.users.findOne({ where: { email } });
    return user;
  }

  async create(user) {
    const { name, email, password, role = "customer" } = user;
    const hash = md5(password);
    const userCreated = await this.users.create({
      name,
      email,
      password: hash,
      role,
    });
    if (!userCreated) {
      const err = new Error("error creating user");
      err.name = "InternalServerError";
      throw err;
    }
    return userCreated;
  }
}

module.exports = UserService;
