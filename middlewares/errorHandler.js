function errorHandler(err, req, res, next) {
  res.status(500).json({
    code: 500,
    message: 'Internal server error :(',
  });
  console.log(JSON.stringify(err, null, 2));
}

module.exports = errorHandler;