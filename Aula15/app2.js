const mongoose = require('mongoose');

const mongoURL = "";

mongoose.connect(mongoURL).then(result => {
    console.log('Mongo Connected!')
})

const Product = require('./models/Product');
const Carrinho = require('./models/Carrinho');


Carrinho.findOne()
.where('userID').equals(1)
.populate({ path: 'products.productId', model: Product, select: 'name price -_id' })
.then(ok => {
    console.log(JSON.stringify(ok))
})
