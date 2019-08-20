
// Leiam Isto
//https://www.tutorialsteacher.com/nodejs/nodejs-modules

//importar o pacote http
const http = require('http');

/*
const requestListener = (req, res) => {
    console.log("Requisição recebida...");
}
*/

let contador = 0;
let reqUrls = [];
//requestListener possui dois atributos
//requisição (req) contem toda a informação que o cliente fez ao servidor
//resposta (res) o que vamos enviar para o servidor
const meuServidor = http.createServer((req, res) => {

    console.log(req);

    console.log("Requisição recebida... " + contador);
    contador++;

    //escreve para o cliente.
    
    res.write("Solicitado: " + req.url);
    reqUrls.push(req.url);
    if (req.url.indexOf("fat") > 0) {
        //calcular o fatorial do numero
        let numero = Number.parseInt(req.url.split('?')[1]);
        let fat = 1;
        for (let i = 2; i <= numero; i++) {
            fat *= i;
        }
        //res.write(`O Fatorial do numero ${numero} eh igual a ${fat}`);
        let respostaEmJson = {num: numero, resultado: fat};
        res.write(JSON.stringify(respostaEmJson));
    
    } else if (req.url.indexOf("/busca/") == 0) {
    
        res.write("\n\nBUSCA FEITA: " + req.url.split("/busca/")[1]);
    
    } else{
        
        res.write("\n\nNAO EXISTE!!!!");
        res.write("\nEitaaa.... nao eh que funciona mesmo, mas essa nao eh uma boa url");
    }
    
    res.write("\n\nTodas requisicoes: " + JSON.stringify(reqUrls));

    res.end();
    
});

//Faz com que o servidor fique escutando em uma porta
//A função de callback é executada após o servidor iniciar com sucesso.
meuServidor.listen(3000, () => console.log("Servidor já está pronto para novas requisições."));
