const mongoose = require('mongoose');
const redis = require('redis');
const util = require('util');

const redisUrl = 'redis://localhost:6379';
const client = redis.createClient(redisUrl);
client.hget = util.promisify(client.hget);

const exec = mongoose.Query.prototype.exec;
mongoose.Query.prototype.cache = function(options) {
  this.cacheKey = JSON.stringify(options.key) || '';
  this.useCache = true;
  return this;
};

mongoose.Query.prototype.exec = async function() {
  if (!this.useCache) return exec.apply(this, arguments);

  const key = JSON.stringify({
    ...this.getQuery(),
    collection: this.mongooseCollection.name
  });

  const cacheValue = await client.hget(this.cacheKey, key);

  if (cacheValue) {
    const doc = JSON.parse(cacheValue);

    return Array.isArray(doc)
      ? doc.map(d => new this.model(d))
      : new this.model(doc);
  }

  const result = await exec.apply(this, arguments);

  client.hset(this.cacheKey, key, JSON.stringify(result));

  return result;
};

module.exports = {
  clearHash: hashKey => {
    client.del(JSON.stringify(hashKey));
  }
};
