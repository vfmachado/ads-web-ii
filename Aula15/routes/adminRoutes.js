/*
    DEVE SER RESPONSÁVEL PELAS ROTAS ADMINISTRATIVAS DO SISTEMA
*/

const express = require('express');

const multer = require('multer');

const path = require('path');
//storage function - como queremos guardar as informações
//DECLARAÇÃO DA FUNÇÃO QUE SERÁ UTILIZADA PARA ARMAZENAR ARQUIVOS
const storageFunction = multer.diskStorage({
    destination: function (req, file, cb) {
     //cria a pasta do usuário caso nao exista usando o fs.
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
  });

var upload = multer({ storage: storageFunction })



//const fs = require('fs');
//const path = require('path');

const Product = require('../models/Product');

//meu roteador personalizado.
const router = express.Router();

/*
router.get('/editar-prod', (req, res) => {
    res.write("Editando um produto...");
    res.end();
});
*/

//TODO FUNÇÃO DO ADMIN
/*
router.get('/ver-usuarios', (req, res) => {
    res.write("Usuarios cadastrados: ");
    res.end();
});
*/
router.get('/add-product', (req, res) => {
    
   if (req.session.isadmin) {
        res.render('add-prod', {
            pageTitle: "IFRS ADMIN - Add Produto",
            logado: req.session.loggedIn,
            user : req.session.user
        });
   } else {
       res.redirect('/login');
   }
});

//TODO LIMITAR NO FRONT END O LIMITE DE IMAGENS!
router.post('/add-product', upload.array('images', 5), (req, res) => {
    //console.log(req.file);
    if (req.files) {
        req.files.forEach(file => {
            console.log(file.path);
        })
    }
    res.send(JSON.stringify(req.body));
    
    console.log(JSON.stringify(req.body));
    let newProduct = new Product(req.body);
    
    req.files.forEach(file => {
        newProduct.images.push(file.path);
    });
    
    newProduct.save()
    .then(result => {
        console.log("Produto adicionado!");
        res.redirect('/admin/add-product');
    })
    .catch(erro => {
        res.send(JSON.stringify(erro));
    })
    
});
/*
router.post('/add-product', (req, res) => {
   
    console.log(JSON.stringify(req.body));

    let todosProdutos = Product.getAll();

    todosProdutos.push(req.body);

   salvarNoArquivo(todosProdutos);

    res.redirect('/');
});
*/


router.get('/excluir/:id', (req, res) => {

    Product.findByIdAndRemove(req.params.id).then(result => {
        res.redirect('/');
    }).catch(erro => {
        console.log(erro);
    })

});
/*
router.get('/excluir/:nome_produto', (req, res) => {
    
    let nome = req.params.nome_produto;
    
    let todosProdutos = Product.getAll();

    for (let i = 0; i < todosProdutos.length; i++) {
        if (todosProdutos[i].name == nome) {
            todosProdutos.splice(i, 1);
            break;
        }
    }

    salvarNoArquivo(todosProdutos);

    res.redirect('/');
});
*/

module.exports = router;

/*
const salvarNoArquivo = (todosProdutos) => {
     //salvar todos os produtos em um arquivo.
     fs.writeFileSync(
        path.join(__dirname, '..', 'data', 'prods.json'),
        JSON.stringify(todosProdutos)
    );
}
*/