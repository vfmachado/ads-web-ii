
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
    res.write("ERRO! PÁGINA INEXISTENTE!");
    res.end();
});


const mongoURL = "mongodb+srv://profvini:Yv1YVXihFe1Gixvx@profvini-kf6xa.mongodb.net/aulas?retryWrites=true&w=majority";

mongoose.connect(mongoURL).then(result => {
    app.listen(3000, () => console.log("Listening at 3000"));
})
