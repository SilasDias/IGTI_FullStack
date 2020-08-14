import ev from './events.js';
ev.on('testEvent', () => {
  console.log('Ouvir tambem');
});
ev.emit('testEvent', 'bla bla bla');
