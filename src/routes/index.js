const express = require('express');
const psicologoController = require('../controllers/psicologoController')

const routes = express.Router();


//rotas psicologo (terminar)
routes.get('/psicologos', psicologoController.listarPsicologos)

routes.get('/psicologos/:id', (req, res) => {
    console.log(req.params);
    res.send ('hellooo modafocaa!!')});

routes.post('/psicologos', (req, res) => {
    console.log(req.body) 
    res.json (req.body)
});

routes.put('/psicologos/:id', (req, res) => {
    console.log(req.body) 
    res.json(req.body)
});

routes.delete('/psicologos/:id', (req, res) => {res.send ('psicologo deletado')});




//rotas pacientes





//rotas atendimentos





module.exports = routes;