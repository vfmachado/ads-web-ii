
const Product = require('../models/Product');


exports.MostraPaginaInicial = (req, res) => {
     
    let todosProdutos = Product.getAll();
    res.render('todos', {prods: todosProdutos})

}


exports.Detalhar = (req, res) => {
    
    let nome = req.params.nome_prod;    //recuperando a variavel da url
    let prod = Product.getProductByName(nome);

    res.render('detalhar', 
    {
        pageTitle: "Detalhes",
        product: prod
    });

}
