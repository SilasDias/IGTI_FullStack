import express from 'express';
import accountsRouter from './routes/accounts.js';
import { promises as fs } from 'fs';

const { readFile, writeFile } = fs;

global.fileName = 'accounts.json'; // variavel global

const app = express();
app.use(express.json());

app.use('/accounts', accountsRouter);

// Arquivo de controle de fluxo
app.listen(3000, async () => {
  try {
    await readFile(global.fileName);
    console.log('API Started!');
  } catch (err) {
    const iniatialJason = {
      nextId: 1,
      accounts: [],
    };
    writeFile(global.fileName, JSON.stringify(iniatialJason))
      .then(() => {
        console.log('API Started and File Created!');
      })
      .catch((err) => {
        console.log(err);
      });
  }
});
