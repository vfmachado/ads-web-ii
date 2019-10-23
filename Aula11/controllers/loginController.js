
const db = require('../database');

exports.MostraLogin = (req, res) => {
     
    res.render('login', {pageTitle: "IFRS Eletrônicos - Login",
        logado: req.session.loggedIn,
        user : req.session.user,
        erro: null
    })

}


exports.Deslogar = (req, res) => {

    //destruir a sessão
    req.session.destroy();

    //redirecionar
    res.redirect('/');

}


exports.FazLogin = (req, res) => {

    const email = req.body.email;
    const pass = req.body.pass;

    let query = `SELECT * FROM users 
        WHERE email = '${email}' AND pass = '${pass}'`;

    db.execute(query)
    .then(result => {
        console.log(result[0]);
        if (result[0].length > 0) {
            //res.write("LOGOU: " + result[0][0].email);
            req.session.user = result[0][0];
            req.session.loggedIn = true;
            if (result[0][0].isadmin) {
                //res.write("\nEssa pessoa eh admin");
                //res.cookie('isadmin', 'true');
                req.session.isadmin = true;
                res.redirect('/admin/add-product');  
            } else {
                res.redirect('/');
            }
             
            //res.end();
        } else {
            //res.write("Usuário e senhas não conferem!");
            //res.end();
            res.render('login', {pageTitle: "IFRS Eletrônicos - Login",
            logado: req.session.loggedIn,
            user : req.session.user,
            erro: "Dados não conferem"
        });
        }
    })
    .catch(erro => {
        console.log(erro);
        res.write(JSON.stringify(erro));
        res.end();
    });

}