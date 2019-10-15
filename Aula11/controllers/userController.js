
const Product = require('../models/Product');


exports.MostraPaginaInicial = (req, res) => {
     
    let todosProdutos = Product.getAll();
    res.render('todos', {
        pageTitle: "IFRS Eletrônicos",
        prods: todosProdutos,
        logado: req.session.loggedIn,
        user : req.session.user})

}


exports.Detalhar = (req, res) => {
    
    let nome = req.params.nome_prod;    //recuperando a variavel da url
    let prod = Product.getProductByName(nome);

    res.render('detalhar', 
    {
        pageTitle: "IFRS Eletrônicos - Detalhe",
        product: prod,
        logado: req.session.loggedIn,
        user : req.session.user
    });

}
