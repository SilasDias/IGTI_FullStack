/* Exemplo: contador que mostra números de um em um a cada segundo e,
quando o número for um múltiplo de 5, mostra +0,5 após
meio segundo. Criar botão para cancelar a execução. */

// (✓) Mostrar exemplo com setTimeout
// (✓) Mostrar exemplo com setInterval
// (✓) Cancelar setInterval com clearInterval

window.addEventListener('load', function () {
  const timer = document.querySelector('#timer');
  let count = 0;

  const interval = setInterval(() => {
    timer.textContent = ++count; // somando a cada segundo

    if (count === 10) {
      this.clearInterval(interval);
      return;
    }
    if (count % 5 === 0) {
      setTimeout(() => {
        timer.textContent = count + ',5'; // Acrescenta 0,5 segundo multiplo 5
      }, 500);
    }
  }, 1000);
});
