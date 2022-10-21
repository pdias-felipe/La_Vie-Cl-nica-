const { Psicologos } = require("../models");
const jwt = require("jsonwebtoken");
const secret = require("../configs/secret")
const Login = require("../validations/auth/login");

const authController = {
    async login(req, res) {
        try {
            const { email, senha } = req.body;

        const psicologos = await Psicologos.findOne({
            where: {
                email,
                senha,
            },
        });
        if (Login == !psicologos.email || !psicologos.senha) {
            return res.status(401).json("E-mail ou senha inválido, verifique e tente novamente");
        }
        const token = jwt.sign(
            {
                id: psicologos.id,
                email: psicologos.email,
                nome: psicologos.nome,
            },
            secret.key
        );

        return res.json(token);

        } catch (error) {
            return res.status(500)
        }        
    },

};

module.exports = authController;