const { Psicologos } = require("../models/psicologos");
const Login = require("../validations/auth/Login");

const authController = {
    async login(req, res) {
        const usuario = await Usuario.find({
            where: {
                email,
                senha,
            },
        });
        if (!usuario || !usuario.senha) {
            return res.status(401).json("E-mail ou senha inválido, verifique e tente novamente");
        }
            return res.json("Logado!");
    },

};

module.exports = authController;