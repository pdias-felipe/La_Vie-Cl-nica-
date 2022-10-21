const { ValidationError } = require("express-validation");

module.exports = (error, req, res, next) => {
    if(error instanceof ValidationError){
        return res.status(error.statusCode).json("E-mail ou senha inválido, verifique e tente novamente", error);
    }
    if(error instanceof ValidationError){
        return res.status(error.statusCode).json("Id não encontrado")
    }
};

