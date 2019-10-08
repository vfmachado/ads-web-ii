
const mysql = require('mysql2');

const connection = mysql.createPool({
    host: 'localhost',  //onde está o meu banco
    user: 'root',       //usuario
    password: 'ifrs',   //senha
    database: 'netflix'    //qual o esquema
}).promise();

module.exports = connection;