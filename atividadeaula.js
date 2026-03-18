var meunome = "Valdemar";
console.log(meunome);

var meusobrenome = "Rocha Formiga Neto";
console.log(meusobrenome);

var anoatual = "2026";
console.log(anoatual);

var idadecompleta = "23";
console.log(idadecompleta);

function nomecompletoeidade(){
    console.log(`Meu nome é ${meunome} da ${meusobrenome}`);
    var anonasc = anoatual - idadecompleta;
    console.log(`eu nasci em ${anonasc} `);
}
nomecompletoeidade();