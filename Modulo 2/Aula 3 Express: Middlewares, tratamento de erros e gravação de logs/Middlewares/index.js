import express from 'express';
import carrosRouter from './carrosRouter.js'; //importa carrosRouter

const app = express();
app.use(express.json());

app.use('/carros', carrosRouter); //filtro tudo que for /carros

app.use((req, res, next) => {
  console.log(new Date());
  next();
});

//nivel roteador
app.get('/teste', (req, res) => {
  res.end();
});

app.listen(3000, () => {
  console.log('API Started');
});
