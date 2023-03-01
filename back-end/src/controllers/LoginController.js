class LoginController {
    constructor(service) {
        this.service = service;
        this.login = this.login.bind(this);
    }

    async login(req, res) {
        const data = req.body;
        const token = await this.service.login(data);
        return res.status(200).json({ token });
    }
}

module.exports = LoginController;