const { clearHash } = require('../services/cache');

module.exports = async (req, res, next) => {
  await next();
  if ([201, 200].includes(res.statusCode)) clearHash(req.user.id);
};
