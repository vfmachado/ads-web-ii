const express = require('express');
const bodyparser = require('body-parser');  
const fs = require('fs');
const https = require('https');


const app = express();

app.use(bodyparser.urlencoded({ extended: false }));

const nomes = [];

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Methods',
      'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });

app.use('/', (req, res, next) => {
    setTimeout(() => {
        //console.log(req)
        next()}, 2000);
});

app.get('/', (req, res) => {
    console.log("Requisição na url /");
    res.send("Requisição recebida");
});

app.get('/add-nome/:nome', (req, res) => {
    console.log("Requisição na url /add-nome/:nome");

    

    if (req.params.nome.toLowerCase != "xablau" && req.params.nome.length > 3)
    nomes.push(JSON.stringify(req.params.nome));

    res.send("OK! Recebido: " + req.params.nome);
});


app.get('/nomes', (req, res) => {
    let dados = JSON.stringify(nomes);
    res.send(dados);
});
 

app.post('/add-nome', (req, res) =>{
    console.log(req.body);
    nomes.push(req.body.name);
    res.send("OK");
})


https.createServer({
    key: fs.readFileSync('./key.pem'),
    cert: fs.readFileSync('./cert.pem'),
    passphrase: 'vinicius machado'
}, app).listen(3000, () =>{
    console.log("Server running at 3000");
})