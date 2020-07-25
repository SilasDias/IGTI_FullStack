// map - gera um novo array transformando os dados.
// filter - gera um novo array filtrando elementos com base em proposição.
// forEach - percorre todos os elementos do array, aplicando lógica.
// reduce - realiza cálculo iterativo com base nos elementos.
// find - encontra elementos com base em proposições.
// some - verifica se há pelo menos um elemento que atenda à proposição.
// every - verifica se todos os elementos atendem à proposição.
// sort - ordena os elementos com base em um critério.

// (✓) map      (transformar array em objeto com nome e email)

window.addEventListener('load', () => {
  doMap();
  doFilter();
  doForEach();
});

function doMap() {
  const nameEmailArray = people.results.map((person) => {
    return {
      name: person.name,
      email: person.email,
    };
  });
  console.log(nameEmailArray);
}

// (✓) filter   (maiores de 18 anos)

function doFilter() {
  oldThan50 = people.results.filter((person) => {
    return person.dob.age > 50;
  });
  console.log(oldThan50);
}

// (✓) forEach  (incluir nova propriedade no objeto)

function doForEach() {}
