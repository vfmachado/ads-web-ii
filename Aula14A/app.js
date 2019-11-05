
const express = require('express');
const bodyparser = require('body-parser');  
const mongoose = require('mongoose');

const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(bodyparser.urlencoded({ extended: false }));

app.use(express.static('public')); //o padrao é /public, então pode ser omitido

//incluindo meu novo router
const routes = require('./routes/rotasPrincipais');
app.use(routes);


app.use((req, res) => {
    res.status(404);
    res.write("ERRO! PAGINA INEXISTENTE!");
    res.end();
});


const mongoURL = "mongodb://localhost:27017/aulas";

mongoose.connect(mongoURL).then(result => {
    app.listen(3000, () => console.log("Listening at 3000"));
})
