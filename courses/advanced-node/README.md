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
