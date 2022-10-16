const psicologoController = {
    listarPsicologos: (req, res) =>{
        res.json([{nome: "felipe"}, {nome: "jonathan"}])
    }
}







module.exports = psicologoController;