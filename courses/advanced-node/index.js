const cluster = require('cluster');
const express = require('express');

const app = express();

const doWork = delay => {
  const start = Date.now();
  while (Date.now() < start + delay) {}
};

if (cluster.isMaster) {
  cluster.fork();
  cluster.fork();
} else {
  app.get('/', (req, res) => {
    doWork(5000);
    res.json({ message: 'skelewu' });
  });
  app.get('/api', (req, res) => res.json({ message: 'we don show' }));
  app.listen(3000);
}
