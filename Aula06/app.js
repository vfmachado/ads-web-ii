/*
    express => gerenciar rotas em um servidor NodeJS
    nodemon => reiniciar automaticamente o sistema toda vez que modificarmos algum arquivo.
    body-parser => tratar as requisições que chegam (é um middleware)

    ejs => template engine...

     npm install express nodemon body-parser ejs
*/

const express = require('express');

const app = express();

const bodyparser = require('body-parser');  

// parse application/x-www-form-urlencoded
app.use(bodyparser.urlencoded({ extended: false }));

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.write("OK Aula 06");
    res.end();
});

//com use vamos filtrar as rotas admin
const adminRouter = require('./routes/adminRouter');
app.use('/admin', adminRouter);

app.listen(3000, () => {console.log("Escutando...")});