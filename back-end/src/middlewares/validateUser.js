class ValidateUser {
  constructor(service) {
    this.service = service;
    this.validateUserExists = this.validateUserExists.bind(this);
  }

  async validateUserExists(req, _res, next) {
    const user = await this.service.findOne(req.body.email);
    if (user) {
      const err = new Error('Existing user');
      err.name = 'ConflictError';
      throw err;
    }
    next();
  }
}

module.exports = ValidateUser;