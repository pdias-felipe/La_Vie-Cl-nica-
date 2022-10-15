const express = require('express');

const routes = express.Router();


//rotas psicologo (terminar)
routes.get('/psicologos', (req, res) => {res.send ('hellooo modafocaa!!')});
routes.get('/psicologo/:id', (req, res) => {res.send ('hellooo modafocaa!!')});

routes.post('/psicologos', (req, res) => {
    console.log(req.body) 
    res.json (req.body)
});

routes.put('/psicologo/:id', (req, res) => {
    console.log(req.body) 
    res.json(req.body)
});

routes.delete('/psicologo/:id', (req, res) => {res.send ('psicologo deletado')});


//rotas pacientes



//rotas atendimentos





module.exports = routes;