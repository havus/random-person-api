function errorHandler(err, req, res, next) {
  // console.log(JSON.stringify(err, null, 2));
  if (err.code === 400) {
    res.status(400).json({
      code: 400,
      message: err.message,
    });
  } else {
    res.status(500).json({
      code: 500,
      message: 'Internal server error :(',
    });
  }
}

module.exports = errorHandler;