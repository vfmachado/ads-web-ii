
const Product = require('../models/Product');


exports.MostraPaginaInicial = (req, res) => {
    
    console.log(req.session);
    

    Product.find()
    .then(resultado => {

        res.render('todos', {
            pageTitle: "IFRS Eletrônicos",
            prods: resultado,
            logado: req.session.loggedIn,
            user : req.session.user})

    })
    

}


exports.Detalhar = (req, res) => {
    console.log(req.session.user);
   Product.findById(req.params.id).then(prod => {
    res.render('detalhar', 
    {
        pageTitle: "IFRS Eletrônicos - Detalhe",
        product: prod,
        logado: req.session.loggedIn,
        user : req.session.user
    });
   })
    

}
