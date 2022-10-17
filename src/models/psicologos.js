const db = require('../database');
const { DataTypes } = require('sequelize')

const Psicologos = db.define('Psicologos', 
{
    id: {
        type: DataTypes.INTEGER, 
        primaryKey: true,
        autoIncrement: true,
    },

    nome: {
        type: DataTypes.STRING // VARCHAR no js fica STRING
    },

    email: {
        type: DataTypes.STRING
    },

    senha: {
        type: DataTypes.STRING
    },

    apresentaçao: {
        type: DataTypes.STRING
    },

    createdAt: {
        type: DataTypes.DATE,
    },

    updatedAt: {
        type: DataTypes.DATE,
    },
}, 
{
   tableName: 'psicologos',
});


module.exports = Psicologos;