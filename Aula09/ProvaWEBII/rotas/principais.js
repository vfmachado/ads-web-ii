
const express = require('express');

const router = express.Router();


router.get('/', (req, res) => {
    res.render('todos', {posts : todosPosts});
})

router.get('/adicionar', (req, res) => {
    res.render('add-post');
});

router.post('/add-post', (req, res) => {

    //res.write(req.body.titulo + "\n" + req.body.texto);
    //res.end();
    let novoID;
    if (todosPosts.length > 0) {
        novoID = todosPosts[todosPosts.length -1].id + 1;
    }
    else {
        novoID = 1;
    }
    todosPosts.push( {id: novoID, titulo : req.body.titulo, texto: req.body.texto});
    res.redirect('/');
});


router.get('/detalhar/:id', (req, res) => {
    
    //qual é o post?
    let post;

    //buscar o post com o ID CORRETO
    for (let i = 0; i < todosPosts.length; i++) {
        if (req.params.id == todosPosts[i].id) {
            post = todosPosts[i];
            break;
        }
    }

    /*
    res.write(post.id + "\n");
    res.write(post.titulo + "\n");
    res.write(post.texto + "\n");

    res.end();
    */
   
    res.render('detalhar', {post : post});

});


router.post('/add-comentario/:id', (req, res) => {
     //qual é o post?
     let post;

     //buscar o post com o ID CORRETO
     for (let i = 0; i < todosPosts.length; i++) {
         if (req.params.id == todosPosts[i].id) {
             post = todosPosts[i];
             break;
         }
     }

     let novoID;
     if (post.comentarios > 0) {
         novoID = post.comentarios[post.comentarios.length -1].id + 1;
     }
     else {
         novoID = 1;
     }

     post.comentarios.push({ id : novoID,
        texto: req.body.texto
     })

     res.redirect('/detalhar/' + post.id);
});

router.get('/excluir/:id', (req, res) => {
    
    //buscar o post com o ID CORRETO
    for (let i = 0; i < todosPosts.length; i++) {
        if (req.params.id == todosPosts[i].id) {
           //remover do array
           todosPosts.splice(i, 1);
           break;
        }
    }

    res.redirect('/');
});


router.get('/editar/:id', (req, res) => {
    
    //buscar o post com o ID CORRETO
    let post;
    for (let i = 0; i < todosPosts.length; i++) {
        if (req.params.id == todosPosts[i].id) {
           post = todosPosts[i];
           break;
        }
    }

    res.render('edit-page', {post : post});
});


router.post('/editar/:id', (req, res) => {
    
    //buscar o post com o ID CORRETO
    let post;
    for (let i = 0; i < todosPosts.length; i++) {
        if (req.params.id == todosPosts[i].id) {
           post = todosPosts[i];
           break;
        }
    }

    post.titulo = req.body.titulo;
    post.texto = req.body.texto;

    res.redirect('/');
});

module.exports = router;
