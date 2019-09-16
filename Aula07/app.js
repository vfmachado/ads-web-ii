//por enquanto fica aqui...
todosProdutos = [
    //i7
    {"name":"Processador Intel i7","price":"1999","description":"É quase top de linha mas resolveram lançar o i9","imageUrl":"http://static1.caseking.de/media/image/thumbnail/hpit-529_hpit_529_01_800x800.jpg"}, 

    //memoria
    {"name":"Memória RAM 8GB","price":"299","description":"Kingston","imageUrl":"https://a-static.mlcdn.com.br/618x463/memoria-ram-8gb-ddr4-2400mhz-kingston-dimm-kvr24n17s8-8/cavuca/11463/dce0ce21e97d0fad1c61b54d9426c9e3.jpg"},
    
    //mobo
    {"name":"MotherBoard","price":"399","description":"Gigabyte ou Asus pra mim tanto faz","imageUrl":"https://retrogamingstuff.files.wordpress.com/2013/12/naimo2-dirty-cpu-1600.jpg"}
];

const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');  

const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use(express.static('public'));

//incluindo meu novo router
const userRoutes = require('./routes/userRoutes');
app.use(userRoutes);

//antes da página de erro devemos definir os nossos routers
const adminRoutes = require('./routes/adminRoutes');
app.use('/admin', adminRoutes);


app.use((req, res) => {
    res.status(404);
    res.write("ERRO!");
    res.end();
});

app.listen(3000, () => console.log("Listening at 3000"));