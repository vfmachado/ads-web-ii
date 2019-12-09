var nodemailer = require('nodemailer');
var sgTransport = require('nodemailer-sendgrid-transport');

var options = {
    auth: {
        api_key: 'YOUR-SEND-GRID-API'
    }
}

var mailer = nodemailer.createTransport(sgTransport(options));

let pessoas =
 [{nome: "Lucas", email: "lucasr.w.weber@gmail.com"},
  {nome: "Eduarda", email: "eduarda.c.f.2930@gmail.com"}];


for (p of pessoas) {
    var email = {
        to: p.email,
        from: 'vini@profvini.com',
        subject: 'Bem vindos ao curso de Prog WEB',
        text: `Olá ${p.nome}, teste de envio de emails`,
        html: `<h1>Oi ${p.nome}</h1><p><a  href="http://localhost:3000/confirma/AUTENTICACAO">Clique aqui</a> para confirmar seu email</p`
    };

    mailer.sendMail(email, function(err, res) {
        if (err) { 
            console.log(err) 
        }
        console.log(res);
    });

}