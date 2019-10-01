
const express = require('express');
const router = express.Router();

const Controle = require('./../controllers/userController');

router.get('/', Controle.MostraPaginaInicial);
router.get('/detalhar/:nome_prod', Controle.Detalhar);

module.exports = router;
