import express from 'express';

const app = express();

app.all('/testALL', (req, res) => {
  res.send(req.method);
});

app.get('/teste?', (req, res) => {
  // ? na rota ela atende qualquer chamada
  res.send('/teste?');
});

app.get('/buzz+', (req, res) => {
  // + permite repetir o ultimo caracter da rota
  res.send('/buzz+');
});

app.get('/one*Blue', (req, res) => {
  // asterisco acrescenta
  res.send(req.path);
});

app.post('/test(ing)?', (req, res) => {
  //trata como unidade
  res.send('/test(ing)?');
});

//expressão regular
app.get(/.*Red$/, (req, res) => {
  res.send('/.*Red$/');
});

// Parametros na Rota

//passando dois parametros e ?
app.get('/testParam/:id/:a?', (req, res) => {
  res.send(req.params.id + ' ' + req.params.a);
});

// Parametros via Query
app.get('/testQuery', (req, res) => {
  res.send(req.query);
});

// Parametro Next
app.get(
  '/testMultipleHandlers',
  (req, res, next) => {
    console.log('Callback 1');
    next();
  },
  (req, res) => {
    console.log('Callback 2');
    res.end();
  }
);

// Next com Array
const callBack1 = (req, res, next) => {
  console.log('CallBack 1');
  next();
};
function callBack2(req, res, next) {
  console.log('CallBack 2');
  next();
}
const callBack3 = (req, res, next) => {
  console.log('CallBack 3');
  res.end();
};
app.get('/testMultipleHandlersArrays', [callBack1, callBack2, callBack3]);

// Route
app
  .route('/testRoute')
  .get((req, res) => {
    res.send('/testRoute GET');
  })
  .post((req, res) => {
    res.send('/testRoute POST');
  })
  .delete((req, res) => {
    res.send('/testRoute DELETE');
  });

app.listen(3000, () => {
  console.log('API Starded!');
});
