
const express = require('express');

const router = express.Router();

const Controlador = require('../controllers/MainController');

router.get('/', Controlador.MostraPaginaInicial);

router.get('/add-serie', Controlador.MostraPaginaAdd);

router.post('/nova-serie', Controlador.CadastraSerie);

router.get('/excluir/:id', Controlador.ExcluiSerie);

module.exports = router;
