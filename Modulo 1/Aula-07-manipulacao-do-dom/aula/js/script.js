// var element = document.querySelector('h1');
// element.textContent = 'Mudar o texto aqui';

// var personalDataArray = document.querySelectorAll('.personal-Data');
// personalDataArray;
// personalDataArray = Array.from(personalDataArray);

// var data = Array.from(document.querySelectorAll('.data'));
// for (var i = 0; i < data.length; i++) {
//   var currentElement = data[i];
//   currentElement.classList.add('emphasis');
//   // currentElement.style.color = 'green';
// }
// var p2 = document.querySelector('#p1');
// var p2 = document.querySelector('#p2');
// var p3 = document.querySelector('#p3');

// p1.classList.add('good');
// p2.classList.add('great');
// p3.classList.add('awesome');

if (id > 0 && id <= filmes.length) {
  var add = id - 1;
  return (
    personagens[add] +
    ' é um personagem do filme ' +
    filmes[add] +
    ' que estreou no cinema em ' +
    lancamentos[add] +
    '.'
  );
} else {
  return 'Essa não é uma opção válida.';
}
