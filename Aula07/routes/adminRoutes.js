/*
    DEVE SER RESPONSÁVEL PELAS ROTAS ADMINISTRATIVAS DO SISTEMA
*/

const express = require('express');

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
   res.render('add-prod');
});

router.post('/add-product', (req, res) => {
   
    console.log(JSON.stringify(req.body));
    todosProdutos.push(req.body);
    res.redirect('/');
});


router.get('/excluir/:nome_produto', (req, res) => {
    
    let nome = req.params.nome_produto;
    
    for (let i = 0; i < todosProdutos.length; i++) {
        if (todosProdutos[i].name == nome) {
            todosProdutos.splice(i, 1);
            break;
        }
    }

    res.redirect('/');
});

module.exports = router;