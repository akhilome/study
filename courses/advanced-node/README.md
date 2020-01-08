# NodeJS: Advanced Concepts

Udemy course by Stephen Grider which delves into the innards of the only backend tool I'm confident with at the moment -- NodeJS.

## Concepts

### The Event Loop

### Threadpool

The default threadpool size in Node can be modified by placing the following at the top of the entry point of your application:

```js
// reducing default threadpool to 1
process.env.UV_THREADPOOL_SIZE = 1;

// increasing default threadpool to 6
process.env.UV_THREADPOOL_SIZE = 6;
```

### Clustering

clustering in Node can be used to spin up multiple instances of the same application

```js
const cluster = require('cluster');
cluster.fork(); // <- creates a child
```

#### ❗❗❗Note 👇🏾

Don't go overboard with creating too many forks with the idea of it helping speed up the rate at which the node app responds to requests.

A good rule of thumb -> forks should **not** be more than the underlying CPU's physical/logical cores.

#### PM2

process manager for production level clustering for node.

##### Installing

```bash
npm i -g pm2
```

or

```bash
yarn global add pm2
```

##### Start node app with pm2

using the following command, the node app would be started, handing over cluster management to pm2 in default mode (clusters would be created hugely dependent on the number of logical cores your underlying CPU has)

```bash
pm2 start <entry-point> -i 0
```

##### Helpful commands

- Show all running clusters/instances

```bash
pm2 list
```

- Show details of particular app/instance

```bash
pm2 show <id|name>
```

- Monitor processes

```bash
pm2 monit
```

- Stop running instances

```bash
pm2 delete <app-name>
```

- Docs &rarr; [pm2.io](https://pm2.io/doc/en/runtime/overview/)

### Worker Threads

instructor advices we pay not much attention to worker thread since it's still very experimental in node but rather reach out for clustering when whatever application that is being built calls for some form of concurrency.

### Redis & Caching

In this section the author makes use of Redis to setup a caching layer for our application to enable faster reads for data.

Library being used &rarr; [redis](https://www.npmjs.com/package/redis)

Redis is a key value data store

#### Using Redis in Node

```js
const REDIS_URL = 'redis://localhost:6379';

const redis = require('redis');
const client = redis.createClient(REDIS_URL);
// 👆🏾 this client would be used for saving & retrieving from the redis instance

/* ... */
```

##### Saving Data

```js
/* ... */

client.set('key', 'value to associate with key');

/* ... */
```

##### Getting Data

```js
/* ... */

client.get('key');

/* ... */
```

#### On Nested Hashes

Nested "objects" can be saved into a redis store equivalent to the following structure:

```json
{
  "drake": {
    "1": "Thank Me Later",
    "2": "Take Care",
    "3": "Nothing Was The Same"
  },
  "cole": {
    "1": "The Sideline Story",
    "2": "Born Sinner",
    "3": "2014 Forest Hills Drive"
  },
  "lamar": {
    "1": "Section.80",
    "2": "Good Kid, M.A.A.D City",
    "3": "To Pimp a Butterfly"
  }
}
```

To acheive this, the `hset()` & `hget()` methods are employed.

##### `hset`

```js
/* ... */

client.hset('cole', '4', '4 Your Eyez Only');

/* ... */
```

This alters the cole object in the redis store to the following:

```json
  "cole": {
    "1": "The Sideline Story",
    "2": "Born Sinner",
    "3": "2014 Forest Hills Drive",
    "4": "4 Your Eyez Only"
  }
```

##### `hget`

```js
/* ... */

client.hget('drake', '3', (err, data) => {
  console.log(data);
});

/* ... */
```

This logs `Nothing Was The Same` to the console.

#### Note:

remember to stringify data structures (e.g, objects and arrays) other than numbers and strings before saving into the redis datastore.
