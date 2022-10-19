
const { Atendimentos } = require('../models')

const atendimentosController = {
    listarAtendimentos: async (req, res) =>{ //duas maneiras de escreve a mesma coisa (listarProduto e cadastrarProduto)
        
        const listaDeAtendimentos = await Atendimentos.findAll();  
        
        res.status(200).json(listaDeAtendimentos)
    },

    async listarAtendimentoId(req, res) {
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
    },

    async cadastrarAtendimento(req, res){
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
    },
}


module.exports = atendimentosController;