
const express = require('express');
const router = express.Router();

const Controle = require('./../controllers/userController');

const ControleLogin = require('./../controllers/loginController');

router.get('/', Controle.MostraPaginaInicial);
router.get('/detalhar/:nome_prod', Controle.Detalhar);

router.get('/login', ControleLogin.MostraLogin);
router.post('/login', ControleLogin.FazLogin);
router.get('/deslogar', ControleLogin.Deslogar);

module.exports = router;
