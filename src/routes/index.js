const express = require('express');

const routes = express.Router();

routes.get('/psicologos', (req, res) => {res.send ('hellooo modafocaa!!')});
routes.get('/psicologo/:id', (req, res) => {res.send ('hellooo modafocaa!!')});
routes.post('/psicologos', (req, res) => {res.send ('hellooo modafocaa!!')});
routes.put('/psicologo/:id', (req, res) => {res.send ('hellooo modafocaa!!')});
routes.delete('/psicologo/:id', (req, res) => {res.send ('hellooo modafocaa!!')});



module.exports = routes;