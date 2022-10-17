
const Psicologo = require('../models/Psicologos')

const psicologosController = {
    listarPsicologos: async (req, res) =>{ //duas maneiras de escreve a mesma coisa (listarProduto e cadastrarProduto)
        
        const listaDePsicologos = await Psicologo.findAll();  
        
        res.json(listaDePsicologos)
    },

    async listarPsicologoId(req, res) {
        const { id } = req.params;
        

        const psicologoEncontrado = await Psicologo.findOne(
            {
                where: {
                    id,
                }
            }
        );

        res.json(psicologoEncontrado)
    },

    async cadastrarPsicologo(req, res){
        const {nome, email, senha, apresentaçao } = req.body;

        const novoPsicologo = await Psicologo.create({
            nome,
            email,
            senha,
            apresentaçao
        })

        res.json(novoPsicologo)
    },

    async atualizarPsicologo(req, res) {
        const { id } = req.params;
        const {nome, email, senha, apresentaçao } = req.body;

        const psicologoAtualizado = await Psicologo.update({
            nome, 
            email, 
            senha, 
            apresentaçao },
            {
                where: {
                    id,
                }
            }
        );

        res.json("cadastro atualizado com sucesso!!!")
    },

    async deletarPsicologo(req, res) {
        const { id } = req.params;

        await Psicologo.destroy({
            where: {
                id,
            }
        });

        res.json ("Cadastro de psicólogo deletado com sucesso")
    }
}







module.exports = psicologosController;