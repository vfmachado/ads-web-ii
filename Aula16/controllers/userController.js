
const Product = require('../models/Product');

const Carrinho = require('../models/Carrinho');

exports.MostraDadosCarrinho = (req, res) => {

    if (req.session.loggedIn) {
        Carrinho
            .findOne()
            .where('userID').equals(req.session.user.id)
            .populate({ path: 'products.productId', model: Product, select: 'name price -_id' })
            .then(resultado => {
                res.send(JSON.stringify(resultado));
            })
            .catch(erro => {
                res.send(erro);
            })
        
    } else {
        res.redirect('/login');
    }
    
}

exports.AddCarrinho = (req, res) => {
    
    //verificar se a pessoa está logada
    if (req.session.loggedIn) {

    let idProd = req.params.idProd;

    Carrinho
        .findOne()
        .where('userID').equals(req.session.user.id)
        .then(resultado => {
            //console.log(resultado);
            if (resultado) {
                //existe carrinho
            } else {
                let carrinho = new Carrinho({
                    userID: req.session.user.id,
                    products: [{ObjectId: '5dc9e18a9997e52b644396fc', qtd: 1}]
                })
                carrinho.save().then(ok => {
                    console.log("Criado carrinho com um item.")
                }).catch(erro => {
                    console.log(erro)
                })
            }
        })
        .catch(erro => {
            console.log(erro);
        })

    
    res.send("FIM! Olhe o console");
    } else {
        res.redirect('/login');
    }
}


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
