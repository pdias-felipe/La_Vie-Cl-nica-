const Psicologos = require('./Psicologos');
const Pacientes = require('./Pacientes');
const Atendimentos = require('./Atendimentos')

Pacientes.belongsToMany(Atendimentos, {
    foreignKey: 'paciente_id',
    through: Atendimentos
});

Psicologos.belongsToMany(Atendimentos, {
    foreignKey: 'psicologo_id',
    through: Atendimentos
});



module.exports = {
    Psicologos,
    Pacientes,
    Atendimentos
};