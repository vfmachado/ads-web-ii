
const express = require('express');
const bodyparser = require('body-parser');  

const mongoose = require('mongoose');

const session = require('express-session');

const app = express();


app.set('views', './views');
app.set('view engine', 'ejs');

app.use(bodyparser.urlencoded({ extended: false }));

app.use(express.static('public')); 

const collection = "vinicius-machado";

const mongoURL = "mongodb+srv://alunos:alunos@profvini-kf6xa.mongodb.net/"+collection+"?retryWrites=true&w=majority";

mongoose.connect(mongoURL).then(result => {
    app.listen(3000, () => console.log("Listening at 3000"));
})

//TESTE DE INSERÇÃO / GARANTIR QUE A COLLECTION ESTÁ CORRETA.
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
        type: String,
        required: true
    }
}, {collection: 'names'});

const User = mongoose.model("Name", productSchema);

let newUser = new User({name: "Vinicius"});

newUser.save().then(ok=> {
    console.log(ok);
}).catch(erro => {
    console.log(erro);
})
