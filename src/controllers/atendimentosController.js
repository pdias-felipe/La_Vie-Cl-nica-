
const Atendimento = require('../models/Atendimentos')

const atendimentosController = {
    listarAtendimentos: async (req, res) =>{ //duas maneiras de escreve a mesma coisa (listarProduto e cadastrarProduto)
        
        const listaDeAtendimentos = await Atendimento.findAll();  
        
        res.status(200).json(listaDeAtendimentos)
    },

    async listarAtendimentoId(req, res) {
        const { id } = req.params;
        //if (!id) return res.status(404)        
        const atendimentoEncontrado = await Atendimento.findOne(
            {
                where: {
                    id,
                }
            }
        );

        res.status(200).json(atendimentoEncontrado)
    },

    async cadastrarAtendimento(req, res){
        const {paciente_id, data_atendimento, observaçao } = req.body;
        
        return res.status(400).json('erro')

        const novoAtendimento = await Atendimento.create({
            paciente_id,
            data_atendimento,
            observaçao
        })

        res.status(201).json(novoAtendimento)
    },
}


module.exports = atendimentosController;