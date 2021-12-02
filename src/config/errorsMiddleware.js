module.exports = {
  init(app) {
    app.use((err, req, res, next) => {
      if (res.headersSent) return next(err);
      console.error(err.message);
      return res.status(err.statusCode).json({
        statusCode: err.statusCode,
        message: err.message,
      });
    });
  },
};
