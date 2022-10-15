const express = require ('express')
const routes = require('./routes');

const app = express();


app.use(express.json());
app.use(routes);

// teste do servidor
// app.get('/', (req, res) => {
//    res.send ('hello modafocaa!!')
// })


app.listen(3000, () => console.log('server rodando na porta 3000'));



