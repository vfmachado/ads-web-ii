const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/aulas");

//definicao do  meu Schema
const serieSchema = new mongoose.Schema({
    nome : String,
    descricao: String,
    episodios : Number
}, {collection: 'series'});

//definicao do meu Model
const Serie = mongoose.model("Serie", serieSchema);
/*
//Insercao de um model
let rick = new Serie({
    nome: "Rick and Morty",
    descricao: "Desenho adulto",
    episodios: 60
})

rick.save(
    (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
        }
    }
)
*/


Serie.find({nome: "Game of Thrones"}, (erro, resposta) =>{
    if (erro) {
        console.log(erro);
    } else {
        console.log("Veio do banco...");
        console.log(resposta);
    }
})