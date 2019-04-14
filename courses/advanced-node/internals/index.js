const express = require('express');
const Worker = require('webworker-threads').Worker;

const app = express();

const doWork = delay => {
  const start = Date.now();
  while (Date.now() < start + delay) {}
};

app.get('/', (req, res) => {
  doWork(5000);
  res.json({ message: 'skelewu' });
});
app.get('/api', (req, res) => res.json({ message: 'we don show' }));

app.get('/worker', (req, res) => {
  const worker = new Worker(function() {
    this.onmessage = function() {
      let i = 0;

      while (i < 1e9) {
        i++;
      }

      postMessage('done working! 🙌🏾');
    };
  });

  worker.onmessage = function(message) {
    res.json({ message: message.data });
  };

  worker.postMessage();
});

app.listen(3000);
