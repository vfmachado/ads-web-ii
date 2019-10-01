
todosPosts = [

    {"id": 1,
    "titulo": "Título do post 1 ",
    "texto": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    "comentarios": [{id: 1, texto: "Comentario 1 - teste"}, {id: 2, texto: "Comentario 2 - teste abc"}]
    },
    {"id": 2,
    "titulo": "Título do post 2",
    "texto": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"}

];

const express = require('express');
const bodyparser = require('body-parser');

const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

//rotas
const rotasPrincipais = require('./rotas/principais');
app.use(rotasPrincipais);

app.listen(3000, () => console.log("Escutando na porta 3000"));



