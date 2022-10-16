const express = require ('express')
const routes = require('./routes');

const db = require('./database')
const app = express();

db.hasConection();

app.use(express.json());
app.use(routes);

// teste do servidor
// app.get('/', (req, res) => {
//    res.send ('hello modafocaa!!')
// })


app.listen(3000, () => console.log('server rodando na porta 3000'));



