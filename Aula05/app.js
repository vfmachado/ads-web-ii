//por enquanto fica aqui...
const todosProdutos = [];

console.log(`Hello World... My App is Alive!!!
            \n ... from Nodemon =D`);

const express = require('express');

//import do path (core module do NodeJS)
const path = require('path');

//import do body-parser para tratamento dos dados recebidos por forms
const bodyparser = require('body-parser');  

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyparser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyparser.json());

//os arquivos aqui estão visíveis para todos... acesso público
//não deixem as credenciais do banco dados aqui!
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.write("OK");
    res.end();
});


app.get('/inicial-fake', (req, res) => {
    //enviar a pagina para o usuario
    res.write("TODOS PRODUTOS:");

    //passar por toodos produtos e adicionar na pagina inicial fake
    //forma 1: for passando por todos
    /*
    for (let i = 0; i < todosProdutos.length; i++) {
        res.write(todosProdutos[i].name + "\n");
    }
    */

    //forma 2: for melhorado
    /*
    for (prod of todosProdutos)
        res.write("\n" + prod.name);
    */
    
    //forma 3: método forEach dos arrays em js
    
    todosProdutos.forEach(p => res.write("\n" + p.name));

    //... pesquisar outras formas...

    res.end();
});

app.get('/inicial', (req, res) => {
    //enviar a pagina para o usuario
    res.sendFile(
        path.join(__dirname, "views", "index.html")
    );
});

app.get('/add-product', (req, res) => {
    res.sendFile(
        path.join(__dirname, "views", "add-product.html")
    );
});

app.post('/add-product', (req, res) => {
    /*
    //exemplo hard core!! =D
    let body = [];
    req.on('data', (chunk) => {
        body.push(chunk); //pedaço do pacotinho
                          //coloca no array
    }).on('end', () => {
        body = Buffer.concat(body).toString();
        //body passa a ser um texto com o conteúdo de todos
        //pacotinhos =D
        res.write("Form Recebido!!!\n");
        res.write("Conteudo do form: " + body);
        res.end();
    // at this point, `body` has the entire request body stored in it as a string
    });
    */

    //utilizando body-parser
    //res.write("Recebido: " + JSON.stringify(req.body));
    //res.end();
    console.log(JSON.stringify(req.body));
    todosProdutos.push(req.body);
    res.redirect('/inicial-fake');
});


//antes da página de erro devemos definir os nossos routers
const adminRoutes = require('./routes/adminRoutes');
app.use('/admin', adminRoutes);


app.use((req, res) => {
    res.status(404);
    res.write("ERRO!");
    res.end();
});

app.listen(3000, () => console.log("Listening at 3000"));