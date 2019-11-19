const db = require('../database');

class User {

    constructor(name, email, cpf, pass) {
        this.name = name;
        this.email = email;
        this.cpf = cpf;
        this.pass = pass;
        this.isadmin = 0;
    }


    static buscarTodos() {
        //retornar todos os users
    }

    salvarNoBanco() {
        let insercao = `
        INSERT INTO users 
            (name, cpf, email, pass) 
            VALUES 
            ('${this.name}', '${this.cpf}', '${this.email}', '${this.pass}')`;

        
        return db.execute(insercao);

    }

    static buscarPorID(id) {
        let query = "SELECT * FROM users WHERE id = " + id;
        return db.execute(query);
    }
}

module.exports = User;