const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//definicao do  meu Schema
const productSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String
    },
    imageUrl: {
        type: String
    },
    images: []
    
}, {collection: 'products'});

//definicao do meu Model
const Product = mongoose.model("Product", productSchema);

module.exports = Product;
/*

/*
const fs = require('fs');
const path = require('path');

class Product {

    constructor() {
        this.name = "";
        this.price = 1;
        this.description = "Produto Genérico";
        this.imageUrl = "PRODUTO SEM IMAGEM";
    }

    //salvar o produto
    save() {

    }

    //buscar todos os produtos
    static getAll() {
        //ler do arquivo
        let conteudoArquivo = fs.readFileSync(
            path.join(__dirname, '..', 'data', 'prods.json')
        );
    
        return JSON.parse(conteudoArquivo); 

    }


    static getProductByName(nomeBusca) {

        let todosProdutos = Product.getAll();

        for (let i = 0; i < todosProdutos.length; i++) {
            if (todosProdutos[i].name == nomeBusca) {
                return todosProdutos[i];
            }
        }
    }

}

module.exports = Product;

*/