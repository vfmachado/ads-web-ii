/*
    O model é a representação dos meus dados
*/
const db = require('../database');

class Serie {

    constructor() {
        this.id = 0;
        this.name = "TESTE";
        this.description = "TESTE DESCRIPTION";
        this.genre = "GENERICO";
        this.image = "URL DA IMAGEM";
    }

    async salvar() {

        let query = `INSERT INTO series (name, description, genre, image_url) VALUES ('${this.name}', '${this.description}', '${this.genre}', '${this.image}');`;

        let result = await db.execute(query);
        
        return result;
        
    }


    static getAll(funcaoParaExecutar) {
        //CONECTAR NO BANCO E BUSCAR TODAS AS SERIES.
        db.execute("SELECT * FROM series")
        .then(resultado => {
          // console.log("Vou retornar...")
           
           funcaoParaExecutar(resultado[0]);
        })
        .catch(erro => {
            console.log("Erro ao buscar a tabela de series. Erro: " + erro);
        });
    }

    static excluir(id) {
        //retorna a promessa da execução
        return db.execute("DELETE FROM series WHERE id = " +  id);
       
    }
    
    static getByID(id) {
        
        return new Promise(
            (resolve, reject) => {
                db.execute("SELECT * FROM series where id = " + id)
                .then(resultado => {
                    console.log("Retornei da consulta: " + JSON.stringify(resultado[0]))
                    resolve(resultado[0]);
                })
            }
        )

    }
    

    //deveria ser estático
    async buscaTodos() {
        //PROXIMA AULA   

    }
    
};

module.exports = Serie;