
const express = require('express');

const router = express.Router();

const fs = require('fs');
const path = require('path');

// '/' é a minha URL
// 'todos' é o meu arquivo ejs
router.get('/', (req, res) =>{

    //ler do arquivo
    let conteudoArquivo = fs.readFileSync(
        path.join(__dirname, '..', 'data', 'prods.json')
    );
    
    todosProdutos = JSON.parse(conteudoArquivo); 

    res.render('todos', {prods: todosProdutos})
});

// os : servem para criar uma variavel na minha url
router.get('/detalhar/:nome_prod', (req, res) => {
    
    let nome = req.params.nome_prod;    //recuperando a variavel da url
    let prod = buscaProdutoPeloNome(nome);
    console.log("Depois do método ", prod);
    res.render('detalhar', 
    {
        pageTitle: "Detalhes",
        product: prod
    });
    //res.write("Vc clicou no produto" + nome);
    //res.end();
});

module.exports = router;

const buscaProdutoPeloNome = nome => {
    /*
    todosProdutos.forEach(element => {
        console.log('Comparando ' + element.name  + " com " + nome)
        if (element.name == nome) {
            console.log("Executei o return com ", element);
            return element;
        }
    });
    */

    for (let i = 0; i < todosProdutos.length; i++) {
        if (todosProdutos[i].name == nome) {
            return todosProdutos[i];
        }
    }


   
}