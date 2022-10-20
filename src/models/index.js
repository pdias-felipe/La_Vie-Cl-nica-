const Psicologos = require('./Psicologos');
const Pacientes = require('./Pacientes');
const Atendimentos = require('./Atendimentos')

Pacientes.belongsToMany(Psicologos, 
    {  through: { 
        model: Atendimentos, unique: false }, 
        foreignKey: 'paciente_id' });
        
Psicologos.belongsToMany(Pacientes, 
    {  through: { 
        model: Atendimentos, unique: false }, 
        foreignKey: 'psicologo_id' });


module.exports = {
    Psicologos,
    Pacientes,
    Atendimentos
};