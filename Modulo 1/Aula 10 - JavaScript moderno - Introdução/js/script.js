'use strict'; //O Javascript acusa mais erros

// Var x Let

// var tem escopo abrangente
// let tem escopo reduzido

// Com Var
function withVar() {
  for (var i = 0; i < 10; i++) {
    console.log('Var' + i);
  }

  i = 20;
  console.log(i);
}

// Com Let
function withLet() {
  for (let i = 0; i < 10; i++) {
    console.log('Let' + i);
  }

  // i = 20;
  // console.log(i);
}
withVar();
withLet();

// Const - Não é possivel reatribuir valores
/* const c = 10;
c = 20; */

const d = [];
d.push(1);
console.log(d);

// Function e Arrow function

function sum(a, b) {
  return a + b;
}

// função anonima
const sum2 = function (a, b) {
  return a + b;
};
// arrow function
const sum3 = (a, b) => {
  return a + b;
};
// arrow function reduzida
const sum4 = (a, b) => a + b;
console.log(sum(2, 3));
console.log(sum2(2, 3));
console.log(sum3(2, 3));
console.log(sum4(2, 3));

// template literals !

const name = 'Silas';
const surName = 'Dias';
const text1 = 'Meu nome é ' + name + ' ' + surName;
const text2 = `Meu nome é ${name} ${surName}`;

console.log(text1);
console.log(text2);

// Default Parameters
const sum5 = (a, b = 10) => a + b; // so o segundo parametro pode modificar
console.log(sum5(2));
console.log(sum5(2, 8));
