const Psicologos = require('./Psicologos');
const Pacientes = require('./Pacientes');
const Atendimentos = require('./Atendimentos')

Pacientes.belongsTo(Psicologos, {
    foreignKey: 'psicologo_id'
});

Psicologos.hasMany(Pacientes, {
    foreignKey: 'psicologo_id'
})

module.exports = {
    Psicologos,
    Pacientes,
    Atendimentos
};