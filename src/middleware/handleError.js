const { ValidationError } = require("express-validation");

module.exports = (error, req, res, next) => {
    if(error instanceof ValidationError){
        return res.status(401).json("E-mail ou senha inválido, verifique e tente novamente")
    }
};