//arquivo de conexão com o BD

const sequelize = require('sequelize');

//infos necessarias para conectar o BD
const DB_NAME = 'lavie';
const DB_USER = 'root';
const DB_PASS = 'fffpdias21.';
const DB_CONFIG = {
    dialect:'mysql',
    host:'localhost',
    port: 3306
};

//objeto para guardar a conexão do BD
let db = {};

try {
    db = new sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);

} catch (error) {
    console.error('conexão indisponivel');
};

async function hasConection(){
    try {
        await db.authenticate();
        console.log('BD conectado')
    } catch (error) {
        console.error('conexao indisponivel!!!')
    }
}

Object.assign(db, {
    hasConection,
})

module.exports = db;