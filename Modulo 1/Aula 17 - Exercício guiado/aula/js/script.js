/**
 * Estado da aplicação (state)
 */
// (✓) Criar variáveis de estado da aplicação

let tabCountries = null;
let tabFavorites = null;

let allCountries = [];
let favoritesCountries = [];

let countCountries = [];
let countFavorites = [];

let totalPopulationList = [];
let totalPopulationFavorites = [];

let numberFormat = null;

// (✓) Criar eventListnener de load com função start
/* (✓) Implementar start() com mapeamento de elementos 
   do DOM e invocação à função fetchCountries */

window.addEventListener('load', () => {
  tabCountries = document.querySelector('#tabCountries');
  tabfavorites = document.querySelector('#tabFavorites');
  countCountries = document.querySelector('#countCountries');
  countFavorites = document.querySelector('#countFavorites');
  totalPopulationList = document.querySelector('#totalPopulationList');

  //prettier-ignore
  totalPopulationFavorites = 
  document.querySelector('#totalPopulationFavorites');

  numberFormat = Intl.NumberFormat('pt-BR');

  fetchCountries();
});

/* 
(✓) Implementar fetchCountries() com async/await 
   com busca em 'https://restcountries.eu/rest/v2/all' 
   e transformação para obtenção de id, name, population e flag. 
   Ao final, invocar render(); */

//  Async/Await
async function fetchCountries() {
  const res = await fetch('https://restcountries.eu/rest/v2/all');
  const json = await res.json();
  allCountries = json.map((country) => {
    const { id: numericCode, translations, population, flag } = country;

    return {
      id: numericCode,
      name: translations.pt,
      population,
      flag,
    };
  });
  render();
  // fetch('https://restcountries.eu/rest/v2/all')
  // .then((res) => res.json())
  // .then((json) => {
  // allCountries = json;
  // });
}

// (✓) Implementar render(), com invocação a funções menores:

function render() {
  renderCountryList();
  renderFavorite();
  renderSummary();

  handleCountryButtons();
}

// (✓) Implementar renderCountryList com template literals.
function renderCountryList() {
  let countriesHTML = '<div>';

  allCountries.forEach((country) => {
    const { name, flag, id, population } = country;

    const countryHTML = `
    <div class='country'>
    <div>
    <a id="${id}" class="waves-effect  waves-light btn">+</a>
    </div>
    <div>
    <img src="${flag}" alt="${name}">
    </div>
    <div>
    <ul>
    <li>${name}</li>
    <li>${population}</li>
    </ul>
    </div>
    </div>  
    `;
    countriesHTML += countryHTML;
  });
  countriesHTML += '</div>';
  tabCountries.innerHTML = countriesHTML;
}

// ✓) Implementar renderFavorites com template literals.

function renderFavorite() {
  let favoritesHTML = '<div>';

  favoritesCountries.forEach((country) => {
    const { name, flag, id, population } = country;

    const favoriteCountryHTML = `
    <div class='country'>
    <div>
    <a id="${id}" class="waves-effect  waves-light btn">+</a>
    </div>
    <div>
    <img src="${flag}" alt="${name}">
    </div>
    <div>
    <ul>
    <li>${name}</li>
    <li>${population}</li>
    </ul>
    </div>
    </div>  
    `;
  });

  favoritesHTML += '</div>';

  tabFavorites.innerHTML = favoritesHTML;
}

function renderSummary() {}
function handleCountryButtons() {}
