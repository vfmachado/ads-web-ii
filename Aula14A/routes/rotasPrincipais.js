const express = require('express');

const Controle = require('../controllers/MeuControle');

const router = express.Router();

//MOSTRA TODOS
router.get('/', Controle.PaginaInicial);

/*
router.get('/edit/:id', Controle.EditarUser);
router.post('/edit/:id', Controle.AtualizarUser);

router.get('/delete/:id', Controle.DeletarUser);

router.get('/add-user', Controle.PaginaAdicao);
router.post('/add-user', Controle.NovoUser);
*/

module.exports = router;