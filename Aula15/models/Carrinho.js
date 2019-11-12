const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const carrinhoSchema = new Schema({

    userID : {
        type: Number,
        required: true
    },
    products : [
        {
            productId : { type: Schema.Types.ObjectId, ref: 'products'},
            qtd : { type: Number }
        }
    ]

}, {collection: 'carrinhos'});

const Carrinho = mongoose.model("Carrinho", carrinhoSchema);

module.exports = Carrinho;