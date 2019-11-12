
const express = require('express');
const router = express.Router();

const Controle = require('./../controllers/userController');

const ControleLogin = require('./../controllers/loginController');

const ControleCadastro = require('./../controllers/signupController');

router.get('/', Controle.MostraPaginaInicial);
router.get('/detalhar/:id', Controle.Detalhar);

router.get('/login', ControleLogin.MostraLogin);
router.post('/login', ControleLogin.FazLogin);
router.get('/deslogar', ControleLogin.Deslogar);

router.get('/new-user', ControleCadastro.MostraCriarCadastro);
router.post('/new-user-form', ControleCadastro.EnviaDadosCadastro);

router.get('/carrinho', Controle.MostraDadosCarrinho);
router.get('/adicionar/:idProd', Controle.AddCarrinho);
module.exports = router;
