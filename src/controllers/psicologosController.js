
const Psicologo = require('../models/Psicologos')

const psicologosController = {
    listarPsicologos: async (req, res) => { //duas maneiras de escreve a mesma coisa (listarProduto e cadastrarProduto)

        const listaDePsicologos = await Psicologo.findAll();

        res.status(200).json(listaDePsicologos)
    },

    async listarPsicologoId(req, res) {
        const { id } = req.params;
        //if (!id) return res.status(404)        
        const psicologoEncontrado = await Psicologo.findOne(
            {
                where: {
                    id,
                }
            }
        );

        res.status(200).json(psicologoEncontrado)
    },

    async cadastrarPsicologo(req, res) {
        const { nome, email, senha, apresentaçao } = req.body;
        if (!nome || !email || !senha)  // se eu coloco apretação da status 400
            return res.status(400).json('esta faltando informação')

        const novoPsicologo = await Psicologo.create({
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

        if (!nome || !email || !senha)  // se eu coloco apretação da status 400
            return res.status(400).json('esta faltando informação')

        await Psicologo.update({
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

        await Psicologo.destroy({
            where: {
                id,
            }
        });

        res.status(204).json();
    }
}







module.exports = psicologosController;