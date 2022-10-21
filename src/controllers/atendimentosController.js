
const { Atendimentos } = require('../models')

const atendimentosController = {
    listarAtendimentos: async (req, res) =>{ //duas maneiras de escreve a mesma coisa (listarProduto e cadastrarProduto)
        try {
            const listaDeAtendimentos = await Atendimentos.findAll();  
        
        res.status(200).json(listaDeAtendimentos)

        } catch (error) {
            return res.status(500).json({Error})
        }       
    },

    async listarAtendimentoId(req, res) {
        try {
            const { id } = req.params;
                
        const atendimentoEncontrado = await Atendimentos.findOne(
            {
                where: {
                    id,
                }
            }
        );
        if (!atendimentoEncontrado) { 
            return res.status(404).json('ID não encontrado') 
        };
        res.status(200).json(atendimentoEncontrado)

        } catch (error) {
            return res.status(500).json({Error})
        }        
    },

    async cadastrarAtendimento(req, res){
        try {
            const {paciente_id, data_atendimento, observaçao} = req.body;

        if (!paciente_id || !data_atendimento || !observaçao){
            return res.status(400).json('esta faltando informação')
            };

            const novoAtendimento = await Atendimentos.create({
            paciente_id,
            data_atendimento,
            observaçao,   
            psicologo_id: req.auth.id       
        })
        
        res.status(201).json(novoAtendimento)
        throw new Error()

        } catch (error) {
            return res.status(500).json({Error})
        }
        
    },
}


module.exports = atendimentosController;