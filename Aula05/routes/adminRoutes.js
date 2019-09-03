/*
    DEVE SER RESPONSÁVEL PELAS ROTAS ADMINISTRATIVAS DO SISTEMA
*/

const express = require('express');

//meu roteador personalizado.
const router = express.Router();

router.get('/editar-prod', (req, res) => {
    res.write("Editando um produto...");
    res.end();
});

router.get('/ver-usuarios', (req, res) => {
    res.write("Usuarios cadastrados: ");
    res.end();
});

module.exports = router;