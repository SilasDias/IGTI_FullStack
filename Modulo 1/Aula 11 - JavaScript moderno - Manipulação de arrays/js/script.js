// map - gera um novo array transformando os dados.
// filter - gera um novo array filtrando elementos com base em proposição.
// forEach - percorre todos os elementos do array, aplicando lógica.
// reduce - realiza cálculo iterativo com base nos elementos.
// find - encontra elementos com base em proposições.
// some - verifica se há pelo menos um elemento que atenda à proposição.
// every - verifica se todos os elementos atendem à proposição.
// sort - ordena os elementos com base em um critério.

window.addEventListener('load', () => {
  doMap();
  doFilter();
  doForEach();
  doReduce();
  doFind();
  doSome();
  doEvery();
  doSort();
});

// (✓) map      (transformar array em objeto com nome e email)

function doMap() {
  const nameEmailArray = people.results.map((person) => {
    return {
      name: person.name,
      email: person.email,
    };
  });
  console.log(nameEmailArray);
  return nameEmailArray;
}

// (✓) filter   (maiores de 18 anos)

function doFilter() {
  oldThan50 = people.results.filter((person) => {
    return person.dob.age > 50;
  });
  console.log(oldThan50);
}

// (✓) forEach  (incluir nova propriedade no objeto)

function doForEach() {
  const mappedPeople = doMap();

  mappedPeople.forEach((person) => {
    person.nameSize =
      person.name.title.length +
      person.name.first.length +
      person.name.last.length;
  });
  console.log(mappedPeople);
}

// (✓) reduce   (somar idades)

function doReduce() {
  const totalAges = people.results.reduce((accumulator, current) => {
    return accumulator + current.dob.age;
  }, 0);
  console.log(totalAges);

  // let sumAges = 0;

  // for (let i = 0; i < people.results.length; i++) {
  // var current = people.results[i];
  // sumAges += current.dob.age;
  // }
  // console.log(sumAges);
}

// (✓) find     (primeiro usuário de Minas Gerais)

function doFind() {
  const found = people.results.find((person) => {
    return person.location.state === 'Minas Gerais';
  });
  console.log(found);
}

// (✓) some     (usuários de Amazonas)

function doSome() {
  var found = people.results.some((person) => {
    return person.location.state === 'Amazonas';
  });
  console.log(found);
}

// (✓) every    (nat = 'BR')

function doEvery() {
  const every = people.results.every((person) => {
    return person.nat === 'BR';
  });
  console.log(every);
}

// (✓) sort     (ordenar por nome e idade ASC e DESC)

function doSort() {
  const mappedNames = people.results
    .map((person) => {
      return {
        name: person.name.first,
      };
    })
    .filter((person) => {
      return person.name.startsWith('A');
    })
    .sort((a, b) => {
      return a.name.length - b.name.length; // ordenado pelo tamanho
      // return a.name.localeCompare(b.name); ordenado por nome
    });
  console.log(mappedNames);
}
