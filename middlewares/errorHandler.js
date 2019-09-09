function errorHandler(err, req, res, next) {
  console.log(JSON.stringify(err, null, 2));
  res.status(500).json({
    code: 500,
    message: 'Internal server error :(',
  });
}

module.exports = errorHandler;