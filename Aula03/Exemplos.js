console.log("Inicio da aula 03");

const print = a => console.log(a);

const produtos = [];

print(produtos);

//isso é proíbido pela declaração de const.
//produtos = "nova coisa";


//ao inves de var, vamos utilizar let
// print(x); precisamos primeiro criar / declarar a variavel
let x = 0;
print(x);

//voltando ao nosso array

//javascript deixa fazer qualquer coisa...
produtos.push("123");
produtos.push(123);
produtos.push({content: 123});
produtos.push(true);
//mesmo...
produtos.push([1, 2, 3, false]);

print(produtos);


const series = [
    "La Casa de Papel",
    "Ponto Cego",
    "Black Mirror",
    "True Detective",
    "GoT",
    "Suits"
];

const novasSeries = [
    "Dexter",
    "Lucifer",
    "O último reino"
];

//print("Series: ")
//print(series);

//print("\nNovas Series:");
//print(novasSeries);


const todasSeries = series.concat(novasSeries);
//print("Todas:");
//print(todasSeries);

let tipo = typeof(series);
//print(tipo);

series.push("Rick and Morty");

//testando apenas a primeira posição
tipo = typeof(series[0]);
if (tipo == 'string') {
//    print("Realmente tem um texto ali...");
} else {
//    print("Ei... digite apenas texto!!!");
}

const verificaSeString = function(parametro) {
    //print("Testando para : " + parametro);
    return typeof(parametro) == 'string';
}

let resultado = series.every(
        verificaSeString
);

if (resultado == true) {
    //print("Series validadas.");
}
else {
    //print("Valor estranho encontrado na lista");
}

    //sabendo quem é o índice... suponha quero utilizar para alguma coisa
for (let i = 0; i < series.length; i++ ) {
    let s = series[i];
    //print(s);
}

//for melhorado... muito útil.
for (let s of series) {
    //print(s);
}

print("ForEach:");
series.forEach(print);

print("\n\nDepois de ordenar:");
series.sort();
series.forEach(print);








