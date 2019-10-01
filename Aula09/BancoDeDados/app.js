
// get the client
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createPool({
    host: 'localhost',  //onde está o meu banco
    user: 'user',       //usuario
    password: 'pass',   //senha
    database: 'ads-progweb-ii'    //qual o esquema
}).promise();

/*
connection.query("SELECT * FROM users",
    (err, results, fields) => {
    console.log(results); // results contains rows returned by server
    //console.log(fields); // fields contains extra meta data about results, if available
  }
);
*/

connection.execute("SELECT * FROM user")
    .then(result => {
        console.log("Busca bem sucedida. Resultado: ")
        console.log(result[0])
    })
    .catch(erro => {
        console.log("Ocorreu um erro ao buscar: " + erro)
    });



console.log("TERMINEI...")