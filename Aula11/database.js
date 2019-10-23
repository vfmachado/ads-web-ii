
const mysql = require('mysql2');

const connection = mysql.createPool({
    host: '200.132.13.90',  //onde está o meu banco
    user: 'roger',       //usuario
    password: 'roger',   //senha
    database: 'ads-progweb-ii'    //qual o esquema
}).promise();

module.exports = connection;