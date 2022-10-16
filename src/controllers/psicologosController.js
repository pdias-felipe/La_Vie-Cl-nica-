const psicologosController = {
    listarPsicologos: (req, res) =>{
        res.json([{nome: "felipe dias"}, {nome: "jonathan silva"}])
    }
}







module.exports = psicologosController;