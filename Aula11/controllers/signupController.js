
const db = require('../database');

exports.MostraCriarCadastro = (req, res) => {
    res.render('formulario-cadastro', 
        {
            pageTitle: "Novo Usuário",
            user: req.session.user
        });
}

exports.EnviaDadosCadastro = (req, res) => {

    let name = req.body.name;
    let email = req.body.email;
    let cpf = req.body.cpf;
    let senha = req.body.pass;

    let insercao = `
        INSERT INTO users 
            (name, cpf, email, pass) 
            VALUES 
            ('${name}', '${cpf}', '${email}', '${senha}')`;

    db.execute(insercao).then(result => {
        res.send("EFETUADO COM SUCESSO... volte para logar!");
    }).catch(erro => {
        res.send("ERRO AO CADASTRAR USUARIO: " + JSON.stringify(erro));
    });
    

}