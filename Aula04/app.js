//importar o express - framework para desenvolvimento web
const express = require('express');

//para trabalhar com a construção de caminhos em qualquer SO
const path = require('path');

//execução da função express() - cria o nosso "servidor"
const app = express();

//aula passada
/*
const meuServidor = http.createServer((req, res) => {
    console.log(req);
});
*/
const requisicoesFeitas = [];

//middleware personalizado!!! TOP DEMAIS
app.use('*', (req, res, next) => {
    requisicoesFeitas.push({url: req.originalUrl, date: Date()}); 
    console.log(requisicoesFeitas);
    //res.write("Passei pelo middleware\n");
    next();
});

app.get('/', (req, res) => {
    console.log("Ok com express... Diretorio atual: " + __dirname);
    //res.write("Pagina inicial");
    //res.end();
    
    //res.sendFile('C:\\dev\\ADS-WEB-II\\Aulas\\Aula04\\views\\pagina-inicial.html', err => console.log(err));
    res.sendFile(
        path.join(__dirname, "views", "pagina-inicial.html"), 
        err => {if (err != undefined) console.log(err)}
        );
});

app.get("/fat", (req, res) => {
    res.write("Era para ser o fatorial.");
    res.end(); 
});

//use - define um midleware para a aplicação; Neste caso
//qualquer rota com qualquer tipo de requisição.
app.use('*', (req, res) => {
    res.status(404); //setando o status code como não encontradoS
    res.write("Pagina nao encontrada");
    res.end();
});


const funcaoOK = function() {
    console.log("Tudo certo no listen.");
}

//aplicação vai escutar na porta 3000.
//se tiver tudo certo, mostra a msg.
//app.listen(3000, () => console.log("Listening at 3000"));
app.listen(3000, funcaoOK);

console.log("Depois do listen..."); //aparece antes da mensagem do listen
// pq o mundo web é assíncrono... aceite!