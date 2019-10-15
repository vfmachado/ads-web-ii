/*
    DEVE SER RESPONSÁVEL PELAS ROTAS ADMINISTRATIVAS DO SISTEMA
*/

const express = require('express');

const fs = require('fs');
const path = require('path');

const Product = require('../models/Product');

//meu roteador personalizado.
const router = express.Router();

router.get('/editar-prod', (req, res) => {
    res.write("Editando um produto...");
    res.end();
});

router.get('/ver-usuarios', (req, res) => {
    res.write("Usuarios cadastrados: ");
    res.end();
});

router.get('/add-product', (req, res) => {
    /*res.sendFile(
        path.join(__dirname, "views", "add-product.html")
    );
    */
    console.log(req.session);

   if (req.session.isadmin) {
       console.log("PAssei aqui!");
        res.render('add-prod', {
            pageTitle: "IFRS ADMIN - Add Produto",
            logado: req.session.loggedIn,
            user : req.session.user
        });
   } else {
       res.redirect('/login');
   }
});

router.post('/add-product', (req, res) => {
   
    console.log(JSON.stringify(req.body));

    let todosProdutos = Product.getAll();

    todosProdutos.push(req.body);

   salvarNoArquivo(todosProdutos);

    res.redirect('/');
});


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

module.exports = router;


const salvarNoArquivo = (todosProdutos) => {
     //salvar todos os produtos em um arquivo.
     fs.writeFileSync(
        path.join(__dirname, '..', 'data', 'prods.json'),
        JSON.stringify(todosProdutos)
    );
}