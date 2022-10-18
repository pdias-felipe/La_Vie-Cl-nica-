
const Paciente = require('../models/Pacientes')

const pacientesController = {
    listarPacientes: async (req, res) =>{ //duas maneiras de escreve a mesma coisa (listarProduto e cadastrarProduto)
        
        const listaDePacientes = await Paciente.findAll();  
        
        res.status(200).json(listaDePacientes)
    },

    async listarPacienteId(req, res) {
        const { id } = req.params;
        
        const pacienteEncontrado = await Paciente.findOne(
            {
                where: {
                    id,
                }
            }
        );

        res.status(200).json(pacienteEncontrado)
    },

    async cadastrarPaciente(req, res){
        const {nome, email, idade} = req.body;
        // if (!nome || !email || !idade)
        // return res.status(400).json('esta faltando informação')

        const novoPaciente = await Paciente.create({
            nome,
            email,
            idade
        })

        res.status(201).json(novoPaciente)
    },

    async atualizarPaciente(req, res) {
        const { id } = req.params;
        const {nome, email, idade } = req.body;

        

        await Paciente.update({
            nome, 
            email, 
            idade 
        },
            {
                where: {
                    id,
                }
            }
        );

        res.json("cadastro atualizado com sucesso!!!")
    },

    async deletarPaciente(req, res) {
        const { id } = req.params;

        await Paciente.destroy({
            where: {
                id,
            }
        });

        res.status(204).json();
    }
}


module.exports = pacientesController;