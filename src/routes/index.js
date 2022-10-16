const express = require('express');
const psicologosController = require('../controllers/psicologosController')

const routes = express.Router();


//rotas psicologo (terminar)
routes.get('/psicologos', psicologosController.listarPsicologos)

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