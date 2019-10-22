
const request = require('request');

console.log("Rodando...");
/*
request("https://jsonplaceholder.typicode.com/todos/1", (erro, resposta, body) => {
     // Mostra erro... se houver
    console.log('error:', erro);

    //Status code da requisição
    console.log('statusCode:', resposta && resposta.statusCode); // Print the response status code if a response was received
  
     //o resultado
    console.log('body:', JSON.parse(body));

    console.log("Terminei");
});
/*
/*
request
    .get("https://image.cnbcfm.com/api/v1/image/105992231-1561667465295gettyimages-521697453.jpeg")
    .on('response', res => {
        console.log("Status code: " + res.statusCode);
        console.log("Tipo do conteúdo: " + res.headers['content-type'])
    });
*/
request
    .get("https://jsonplaceholder.typicode.com/todos/1")
    .on('error', err => {
        console.log(err);
    })
    .on('response', res => {
        console.log("RESPOSTA RECEBIDA");
        console.log(res.headers['content-type']);
    })
    .on('data', data => {
        console.log("RECEBI DE VOLTA: ");
        //console.log("" + data);
        let texto = "" + data;
        //
        console.log(texto)
        let dados = JSON.parse(texto);
        console.log("EM JSON: ", dados)

        console.log(dados.title);
    })

