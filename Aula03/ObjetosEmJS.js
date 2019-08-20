//código assíncrono.
setTimeout(() => {
    console.log("Eu avisei!!!");
}, 2000);

/*
const series = [
    "La Casa de Papel",
    "Ponto Cego",
    "Black Mirror",
    "True Detective",
    "GoT",
    "Suits"
];
*/

//4 informações por produto
/*
    Nome
    Preço
    Descricao
    URL da Imagem

    brainstorm
        * struct que guarde as informações e armazene varios itens dessa struct num array
        * [nome, preco, desc, url, nome, preco, desc, url, nome, preco, desc, url, nome, preco, desc, url]
        *
        *  nomes[]
        *  precos[]
        *  desc[]
        *  url[]
*/

//UM POUCO MAIS INTELIGENTE
class Produto {

    //variaveis -> atributos
    //funções (ações) -> métodos
    
    //método construtor (é o método que cria um novo objeto deste tipo)
    constructor(indice) {
        this.nome = "Produto " + indice;
        this.preco = 10;
    }

    detalhar() {
        //return "Nome: " + this.nome + "\tPreço: R$" + this.preco;  
        return `Nome: ${this.nome}\tPreço: R$${this.preco}`;
    }

}


let prod = new Produto(1);
prod.preco = 5;
//console.log(prod.detalhar());

let prod2 = new Produto(2);
//console.log(prod2.detalhar());

let prods = [
    prod, prod2,
    new Produto(3),
    new Produto(4)
];

prods[2].preco = 12;
prods[3].preco = 3;

console.log(prods);

console.log("Produtos com o preco abaixo de R$ 10");
const filtrados = [];
for (let i = 0; i < prods.length; i++) {
    if (prods[i].preco < 10) {
        //console.log(prods[i].detalhar());
        filtrados.push(prods[i]);
    }
}
console.log(filtrados);

const meuFiltroPersonalizado = function(produto) {
    return produto.preco < 10;
}

const filtrados3 = prods.filter(meuFiltroPersonalizado);

const filtrados2 = prods.filter(p => p.preco < 10);

console.log("Filtrados 2:");
console.log(filtrados2);

console.log("Sem filtro:");
console.log(prods);

