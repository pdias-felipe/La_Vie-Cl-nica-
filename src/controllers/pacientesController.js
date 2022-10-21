
const { Pacientes } = require('../models')

const pacientesController = {
    listarPacientes: async (req, res) => { //duas maneiras de escreve a mesma coisa (listarProduto e cadastrarProduto)
        try {
            const listaDePacientes = await Pacientes.findAll();  
        
        res.status(200).json(listaDePacientes)

        } catch (error) {
            return res.status(500).json({Error})
        }       
    },

    async listarPacienteId(req, res) {
        try {
            const { id } = req.params;
        
        const pacienteEncontrado = await Pacientes.findOne(
            {
                where: {
                    id,
                }
            }
        );
        
        if (!pacienteEncontrado) { 
            return res.status(404).json('ID não encontrado') 
        };
        res.status(200).json(pacienteEncontrado)

        } catch (error) {
            return res.status(500).json({Error})
        }        
    },

    async cadastrarPaciente(req, res){
        try {
            const {nome, email, idade} = req.body;
        
        if (!nome || !email || !idade){
        return res.status(400).json('esta faltando informação')
        };

        const novoPaciente = await Pacientes.create({
            nome,
            email,
            idade,
        })

        res.status(201).json(novoPaciente)

        } catch (error) {
            return res.status(500).json({Error})
        }        
    },

    async atualizarPaciente(req, res) {
        try {
            const { id } = req.params;
        const {nome, email, idade } = req.body;        

        if (!nome || !email || !idade){
            return res.status(400).json('esta faltando informação')
            };

        await Pacientes.update({
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

        } catch (error) {
            return res.status(500).json({Error})
        }
    },

    async deletarPaciente(req, res) {
        try {
            const { id } = req.params;

        const pacienteEncontrado = await Pacientes.findByPk(id);

        if (!pacienteEncontrado) { 
            return res.status(404).json('ID não encontrado') 
        };

        await Pacientes.destroy({
            where: {
                id,
            }
        });

        res.status(204).json();

        } catch (error) {
            return res.status(500).json({Error})
        }
        
    }
}


module.exports = pacientesController;