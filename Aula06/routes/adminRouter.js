
const express = require('express');

const router = express.Router();

const nomes = [];

router.get('/users', (req, res) => {
    res.render('todos-users', { nomes });
    //res.write("Mostrar varios usuarios:");
    //res.end();
});

router.get('/users/:nome', (req, res) => {
    //res.render('todos-users', { nomes });
    res.write("Nome recebido... " + req.params.nome);
    res.end();
});

router.get('/add-user', (req, res) => {
    res.render('form-add-user');
});

router.post('/add-user', (req, res) => {
    //req.body => body-parser
    //.name => vem do formulário
    console.log(req.body.name);
    nomes.push(req.body.name);
    res.redirect("/admin/add-user");

});


module.exports = router;
