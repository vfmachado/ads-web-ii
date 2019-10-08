/*
    O controle é responsável por buscar o dado e depois renderizar a página.
    + validação
    + lógica
    
    por exemplo, e-com, trabalhar com o carrinho...
    
*/


const Serie = require('../models/Serie');

exports.MostraPaginaInicial = (req, res) => {

    //bloco de código que eu gostaria que fosse síncrono

    /*
    console.log("Buscando...")
    //buscar um item do banco
    Serie.getByID(1)    //retorna uma promessa...
    .then(resultado => {
        console.log("Mostrando...");
         //mostrar o item do banco na página
        console.log("Veio da promessa: " + JSON.stringify(resultado));
    })
    */
    
    let series = Serie.getAll((series) => {
        res.render('inicial', {series: series});
     });
    
}


exports.MostraPaginaAdd = (req, res) => {
    res.render('form-add');
}


exports.CadastraSerie = async (req, res) => {

    let serie = new Serie();
    
    serie.name = req.body.name;
    serie.genre = req.body.genre;
    serie.description = req.body.description;
    serie.image = req.body.image_url;

    //forçar sincronismo...
    await serie.salvar();
    res.redirect('/');

}


exports.ExcluiSerie = (req, res) => {
    //o método excluir retorna o db.execute (que é uma promessa.)
    Serie.excluir(req.params.id).then(result => {
        res.redirect('/');
    })
   
}