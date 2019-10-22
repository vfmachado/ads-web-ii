const express = require('express');
const bodyparser = require('body-parser');

const request = require('request');

const app = express();

app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json());

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('inicial');
})

app.post('/detalhes/', (req, res) => {

    //busca com o request
    let isbn = req.body.isbn;
    let url = "https://www.googleapis.com/books/v1/volumes?q=isbn:" + isbn;

    /*
    request
    .get(url)
    .on('error', error => {
        res.send("Erro ao buscar " + url);
    })
    .on('data', data => {
        let texto = "" + data;
        let dadosJSON = JSON.parse(texto);
        res.send("Detalhes vindo da API: \n\n" + JSON.stringify(dadosJSON));
    })
    */

    
    request(url, (err, response, body) => {
        let conteudo = JSON.parse(body);
        
        if (conteudo.totalItems > 0) {
            let item = conteudo.items[0].volumeInfo;
            
            let livro = {titulo:  item.title, data: item.publishedDate, descricao: item.description};

            res.send(livro);
        } else {
            res.send("NAO ENCONTRADO");
        }
    })
    
})

app.listen(3000, () => {
    console.log("Listening at 3000");
});
