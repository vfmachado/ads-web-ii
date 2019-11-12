
const mysql = require('mysql2');

const connection = mysql.createPool({
    host: '',  //onde está o meu banco
    user: 'roger',       //usuario
    password: 'roger',   //senha
    database: 'ads-progweb-ii'    //qual o esquema
}).promise();

module.exports = connection;