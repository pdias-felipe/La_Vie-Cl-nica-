const db = require('../database');
const { DataTypes } = require('sequelize');
const Pacientes = require('./Pacientes');
const Psicologos = require('./psicologos');

const Atendimentos = db.define('Atendimentos', 
{
    id: {
        type: DataTypes.INTEGER, 
        primaryKey: true,
        autoIncrement: true,
    },

    paciente_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Pacientes,
            key: 'id',
        },
    },

    psicologo_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Psicologos,
            key: 'id',
        },
    },

    data_atendimento: {
        type: DataTypes.DATE
    },

    observaçao: {
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
   tableName: 'atendimentos',
});


module.exports = Atendimentos;