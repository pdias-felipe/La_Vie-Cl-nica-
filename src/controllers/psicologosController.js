
const { Psicologos } = require('../models')

const psicologosController = {
    listarPsicologos: async (req, res) => { //duas maneiras de escreve a mesma coisa (listarProduto e cadastrarProduto)

        const listaDePsicologos = await Psicologos.findAll();

        res.status(200).json(listaDePsicologos)
    },

    async listarPsicologoId(req, res) {
        const { id } = req.params;
              
        const psicologoEncontrado = await Psicologos.findOne(
            {
                where: {
                    id,
                },
                attributes: { exclude: ['senha'] }
            }
        );

        if (!psicologoEncontrado) { 
            return res.status(404).json('ID não encontrado') 
        };

        res.status(200).json(psicologoEncontrado)
    },

    async cadastrarPsicologo(req, res) {
        const { nome, email, senha, apresentaçao } = req.body;
        if (!nome || !email || !senha || !apresentaçao)  
            return res.status(400).json('esta faltando informação')

        const novoPsicologo = await Psicologos.create({
            nome,
            email,
            senha,
            apresentaçao
        })

        res.status(201).json(novoPsicologo)
    },

    async atualizarPsicologo(req, res) {
        const { id } = req.params;
        const { nome, email, senha, apresentaçao } = req.body;

        if (!nome || !email || !senha || !apresentaçao) { 
            return res.status(400).json('erro na requisição, tente novamente!!!')
        };

        await Psicologos.update({
            nome,
            email,
            senha,
            apresentaçao
        },
            {
                where: {
                    id,
                }
            }
        );

        res.status(200).json(req.body)
    },

    async deletarPsicologo(req, res) {
        const { id } = req.params;
        const psicologoEncontrado = await Psicologos.findByPk(id);

        if (!psicologoEncontrado) { 
            return res.status(404).json('ID não encontrado') 
        };

        await Psicologos.destroy({
            where: {
                id,
            }
        });

        res.status(204).json();
    }
};

module.exports = psicologosController;