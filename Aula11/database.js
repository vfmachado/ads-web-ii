
const mysql = require('mysql2');

const connection = mysql.createPool({
    host: 'localhost',  //onde está o meu banco
    user: 'teste',       //usuario
    password: 'teste',   //senha
    database: 'ads-progweb-ii'    //qual o esquema
}).promise();

module.exports = connection;