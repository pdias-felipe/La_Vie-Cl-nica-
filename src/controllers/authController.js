const { Psicologos } = require("../models");
const Login = require("../validations/auth/login");

const authController = {
    async login(req, res) {
        const { email, senha } = req.body;

        const psicologos = await Psicologos.findAll({
            where: {
                email,
                senha,
            },
        });
        if (Login == !psicologos.email || !psicologos.senha) {
            return res.status(401).json("E-mail ou senha inválido, verifique e tente novamente");
        }
        return res.json("Logado!");
    },

};

module.exports = authController;