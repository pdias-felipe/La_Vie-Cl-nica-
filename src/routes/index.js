const express = require('express');
const authController = require('../controllers/authController');
const psicologosController = require('../controllers/psicologosController')
const requestLog = require("../middleware/requestLog");
const authLoginValidation = require("../validations/auth/login");
const routes = express.Router();


//rotas psicologo (terminar)
routes.get('/psicologos', psicologosController.listarPsicologos)
routes.get('/psicologos/:id', psicologosController.listarPsicologoId);
routes.post('/psicologos', psicologosController.cadastrarPsicologo);
routes.post('/psicologos/login', requestLog, psicologosController.loginPsicologo);
routes.put('/psicologos/:id', psicologosController.atualizarPsicologo);
routes.delete('/psicologos/:id', psicologosController.deletarPsicologo);
routes.post('/login/', requestLog, authLoginValidation, authController.login);



//rotas pacientes





//rotas atendimentos





module.exports = routes;