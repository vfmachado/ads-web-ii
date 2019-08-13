console.log("Rodando");

//declarar uma constante
const maior = function(a, b) {
    if (a >= b) return a;
    return b;
}

//arrow function
const maior2 = (a, b) => {return a >= b ? a : b}

    //nome  =    parametros   flecha    { e o que vai fazer }

const sucessor = a => a + 1;

console.log(maior2(5, 3));
console.log(sucessor(0));

console.log("FIM");

