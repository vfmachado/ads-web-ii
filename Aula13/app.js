
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

/*
    RESAVE = FORÇA A SESSÃO A SER SALVA NOVAMENTE MESMO QUE ELA NÃO TENHA SIDO MODIFICADA.
			DEVE SER VERDADEIRO QUANDO O ARMAZENAMENTO DA SESSÃO SETA UMA DATA DE EXPIRAÇÃO.
			NORMALMENTE É UTILIZADO FALSO
    SAVEUNINITIALIZED = FORÇA A SESSÃO QUE É 'NÃO INICIALIZADA' A SER GUARDADA NO ARMAZENAMENTO.
			UMA SESSÃO É 'NÃO INICIALIZADA' QUANDO É NOVA MAS NÃO MODIFICADA. ESCOLHEI A OPÇÃO FALSE É ÚTIL PARA SESSÕES DE LOGIN, REDUZINDO O CONSUMO DO SERVIDOR.
		
*/

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

mongoose.connect("mongodb://localhost/aulas").then(result => {
    app.listen(3000, () => console.log("Listening at 3000"));
})


const Product = require('./models/Product');

Product.find().select('name price -_id').then(resultado => {
    console.log(resultado);
}).catch(erro => {
    console.log(erro);
})



