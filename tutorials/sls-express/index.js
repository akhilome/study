const serverless = require('serverless-http');
const express = require('express');
const bodyParser = require('body-parser');
const AWS = require('aws-sdk');

const app = express();

const USERS_TABLE = process.env.USERS_TABLE;
const IS_OFFLINE = process.env.IS_OFFLINE;

const dynamoDb = IS_OFFLINE
  ? new AWS.DynamoDB.DocumentClient({
      region: 'localhost',
      endpoint: 'http://localhost:8000'
    })
  : new AWS.DynamoDB.DocumentClient();

app.use(bodyParser.json({ strict: false }));

app.get('/', (req, res) => res.send('Hello World'));

app.get('/users/:userId', (req, res) => {
  const params = {
    TableName: USERS_TABLE,
    Key: {
      userId: req.params.userId
    }
  };

  dynamoDb
    .get(params)
    .promise()
    .then(data => {
      if (!data.Item) return res.status(404).json({ error: 'User not found' });

      const { userId, name } = data.Item;
      res.json({ userId, name });
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({ error: 'Could not get user' });
    });
});

app.post('/users', (req, res) => {
  const { userId, name } = req.body;
  if (typeof userId !== 'string') {
    res.status(400).json({ error: '"userId" must be a string' });
  } else if (typeof name !== 'string') {
    res.status(400).json({ error: '"name" must be a string' });
  }

  const params = {
    TableName: USERS_TABLE,
    Item: {
      userId: userId,
      name: name
    }
  };

  dynamoDb
    .put(params)
    .promise()
    .then(_ => {
      res.json({
        userId,
        name
      });
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({ error: 'Could not create user' });
    });
});

module.exports.handler = serverless(app);
