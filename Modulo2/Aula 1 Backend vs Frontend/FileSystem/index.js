import { promises as fs } from 'fs'; // apelidando promises de 'fs'
import { inherits } from 'util';

// usando promises com  async await
init();
writeReadJason();

async function init() {
  try {
    await fs.writeFile('teste.txt', 'bla bla bla');
    await fs.appendFile('teste.txt', '\nteste append file', 'utf-8');
    const data = await fs.readFile('teste.txt', 'utf-8');
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

async function writeReadJason() {
  try {
    // Escrito com valores iniciais
    const arrayCar = ['Gol', 'Pálio', 'Uno'];
    const obj = { carros: arrayCar };
    await fs.writeFile('teste.json', JSON.stringify(obj));

    //Leiturado conteudo atual
    const data = JSON.parse(await fs.readFile('teste.json'));

    // Conteudo modificado
    data.carros.push('Sandero');

    // Sobrescrito o arquivo com o conteudo modificado
    await fs.writeFile('teste.json', JSON.stringify(data));
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

// usando promises hell
/* fs.writeFile('teste.txt', 'utf-8')
  .then(() => {
    fs.appendFile('teste.txt', '\nteste append file', 'utf-8')
      .then(() => {
        fs.readFile('teste.txt', 'utf-8').then((resp) => {
          console.log(resp);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((err) => {
    console.log(err);
  }); */

/* // Solução com assincrona com callbacks
import fs, { readFileSync } from 'fs';

console.log('1');
fs.writeFile('teste.txt', 'bla bla bla', (err) => {
  //Escreve e cria o arquivo
  console.log('2');
  if (err) {
    console.log(err);
  } else {
    fs.appendFile('teste.txt', '\nteste append file', (err) => {
      if (err) {
        console.log(err);
      } else {
        fs.readFile('teste.txt', 'utf-8', (err, data) => {
          //ler o arquivo
          if (err) {
            console.log(err);
          } else {
            console.log(data);
          }
        });
      }
    });
  }
});
console.log('3'); */

// solução sincrona
/* try { 
  console.log('1');
  fs.writeFileSync('teste.txt', 'bla bla bla');
  console.log('2');
  const data = readFileSync('teste.txt', 'utf-8');
  console.log(data);
  console.log('3');
} catch (err) {
  console.log(err);
} */
