// window.addEventListener('load', start);
// substituir por 'defer' no script do html

var inputFrequency = document.querySelector('#inputFrequency');
var rangeFrequencies = document.querySelector('#rangeFrequencies');
var divColors = document.querySelector('#divColors');

function start() {
  rangeFrequencies.addEventListener('input', handleRangeValueChange);
}

function handleRangeValueChange(event) {
  var currentFrequency = event.target.value;
  inputFrequency.value = currentFrequency;

  findColorsFrom(currentFrequency);
}

function findColorsFrom(frequency) {}
start();
