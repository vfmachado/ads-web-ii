
const express = require('express');
const bodyparser = require('body-parser');  

const cookieparser = require('cookie-parser');

const mongoose = require('mongoose');

//IMPORTAR O EXPRESS SESSION
const session = require('express-session');

const app = express();

app.use(session({
    secret: 'EU CRIO UMA FRASE GIGANTE QUE NINGUEM VAI DESCOBRIR! IAUHAIUHIAHU 12351R1!%!#$!@@!#',
    resave: false,
    saveUninitialized: false
}));

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(bodyparser.urlencoded({ extended: false }));
//app.use(bodyparser.json());

app.use(cookieparser());

/*
app.use('*', (req, res, next) => {
    setTimeout(() => {
        next();
    }, 2000);
})
*/

app.use(express.static('public')); //o padrao é /public, então pode ser omitido
app.use('/data', express.static('data'));
app.use('/uploads', express.static('uploads'));

//incluindo meu novo router
const userRoutes = require('./routes/userRoutes');
app.use(userRoutes);


const isAdmin = (req, res, next) => {
    console.log("Verificando se é admin...");
    if (req.session.isadmin) {
        next();
    } else {
        res.redirect('/login');
    }
}


//antes da página de erro devemos definir os nossos routers
const adminRoutes = require('./routes/adminRoutes');
app.use('/admin', isAdmin, adminRoutes);


app.use((req, res) => {
    res.status(404);
    res.write("ERRO! PÁGINA INEXISTENTE!");
    res.end();
});

/*
mongoose.connect("mongodb://localhost/aulas").then(result => {
    app.listen(3000, () => console.log("Listening at 3000"));
})
*/

const mongoURL = "";

mongoose.connect(mongoURL).then(result => {
    app.listen(3000, () => console.log("Listening at 3000"));
})


const Product = require('./models/Product');

/*
Product.find().select('name price _id').then(resultado => {
    console.log(resultado);
}).catch(erro => {
    console.log(erro);
})
*/

const Carrinho = require('./models/Carrinho');

/*
let novoCarrinho = new Carrinho({
    userID: 1,
    products: [{ObjectId: '5dc9e18a9997e52b644396fc', qtd: 2}]
});

novoCarrinho.save()
.then(certo => {
    console.log("Salvei com sucesso: ", certo)
})
.catch(erro => {
    console.log("Erro ao salvar. ", erro)
});
*/

const User = require('./models/User');
/*
Carrinho.findById('5dc9e624c190192bf0f996d7')
.populate('products', 'name price -_id')
.then(resultado => {
    console.log(resultado);

    User.buscarPorID(resultado.userID)
    .then(user => {
        console.log(user[0][0]);
    })
    .catch(erro => {
        console.log(erro);
    })

    let produto = resultado.products[0];
    console.log(JSON.stringify(produto))
})
.catch(erro => {
    console.log(erro);
})
*/

//ENTREI COM O USUÁRIO 1
/*
let idBusca = 1;
Carrinho
    .findOne()
    .where('userID').equals(idBusca)
    .populate('products', 'name price -_id')
    .then(resultado => {
    console.log(resultado);
    })
    .catch(erro => {
        console.log(erro);
    });
*/

Carrinho 
    .findOne()
    .where('userID').equals(2)
    .populate({ path: 'products.productId', model: Product, select: 'name price -_id' })
    .then(res => {
        console.log(JSON.stringify(res));
    })
    .catch(err => {
        console.log(err);
    })
