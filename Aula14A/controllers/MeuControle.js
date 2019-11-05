
const User = require('../models/User');

const mongoose = require('mongoose');

exports.PaginaInicial = (req, res) => {

    //buscar quem são os usuários cadastrados
    //{ nickname: /prof/i }
    User.find()
    .then(users => {
        //res.send(JSON.stringify(users));
        res.render('main', {users: users});
    });

        //console.log(users);
    //res.render('main');
}

exports.NovoUser = (req, res) => {

    let novouser = new User(req.body);

    novouser.save()
    .then( result => {
        //res.send("SALVO COM SUCESSO \n\n" + JSON.stringify(req.body));
        res.redirect('/');
    })
    .catch(erro => {
        res.send(JSON.stringify(erro));
    })
    
}


exports.DeletarUser = (req, res) => {

    let id = req.params.id;

    User.findByIdAndRemove(id).then(ok => {
        res.redirect('/');
    })

}

exports.EditarUser = (req, res) =>{
    let id = mongoose.Types.ObjectId(req.params.id);
    User.findById(id)
    .then(user =>{
        res.render('edit-user', {user : user})
    })
}

exports.AtualizarUser = (req, res) => {
    let id = req.params.id;
    User.findByIdAndUpdate(id, req.body)
    .then(ok => {
        res.redirect('/');
    }).catch(err => {
        res.send(JSON.stringify(err));
    })

}