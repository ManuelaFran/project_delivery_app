const md5 = require('md5');
const { User } = require('../database/models');
// const jwt = require('../utils/jwt');

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
    const { name, email, password, role = 'customer' } = user;
    const hash = md5(password);
    const userCreated = await this.users.create({
      name,
      email,
      password: hash,
      role,
    });
    if (!userCreated) {
      const err = new Error('error creating user');
      err.name = 'InternalServerError';
      throw err;
    }
    return userCreated;
  }

  // async create(obj) {
  //   const { name, email, password } = obj;
  //   const hash = md5(password);
  //   try {
  //     const result = await this.users.create(
  //       { name, email, password: hash },
  //       );
  //     const { dataValues } = result;
  //     const token = jwt.sign(dataValues);
  //     const { role } = dataValues;
  //     return ({ token, name, email, role });
  //   } catch (error) {
  //     const err = new Error('Existing user!');
  //     err.name = 'ConflictError';
  //     throw err;
  //   }
  // }
}

module.exports = UserService;
