var boolean = true;
console.log(`A variável ${boolean} tem o tipo ${typeof(boolean)}`);

var boolean = true;
console.log(`A variável ${boolean} tem o tipo ${typeof(boolean)}`);

//  usando var global
var nome = 'Prof Lucas';
var nome = 'Valdemar';

// usando var local
function nomeDaFuncao() {
    var idade = 23;
    console.log(idade);
}

console.log(nome);
nomeDaFuncao();

const constante = 'constante';
console.log(constante);

// comparação
var comparacao = '0' === 0;
console.log(comparacao);

// comparacao identifica
var comparacaoIdentifica = '0' === 0;
console.log(comparacaoIdentifica);

// operadores aritmeticos
var mult = 2 * 5;
console.log(mult);

// operadores relacionais
// maior ou igual
var maiorOuIgual = 5 >= 2;
console.log(maiorOuIgual);

// operadores lógicos
// & - todos os valores devem ser true
var e = true && true;
console.log(e);

// || - Somente um valor deve ser true
// ! - inverte os valores
var inverte = !true;
console.log(inverte);
