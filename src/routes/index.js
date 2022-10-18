const express = require('express');
const authController = require('../controllers/authController');
const psicologosController = require('../controllers/psicologosController')
<<<<<<< HEAD
const requestLog = require("../middleware/requestLog");
const authLoginValidation = require("../validations/auth/login");
=======
const pacientesController = require('../controllers/pacientesController');
const atendimentosController = require('../controllers/atendimentosController');


>>>>>>> d121a2f88bd27e6406c002f7d9ac2b540d4a9198
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
routes.get('/pacientes', pacientesController.listarPacientes)
routes.get('/pacientes/:id', pacientesController.listarPacienteId);
routes.post('/pacientes', pacientesController.cadastrarPaciente);
routes.put('/pacientes/:id', pacientesController.atualizarPaciente);
routes.delete('/pacientes/:id', pacientesController.deletarPaciente);


//rotas atendimentos
routes.get('/atendimentos', atendimentosController.listarAtendimentos)
routes.get('/atendimentos/:id', atendimentosController.listarAtendimentoId);
routes.post('/atendimentos', atendimentosController.cadastrarAtendimento);



module.exports = routes;