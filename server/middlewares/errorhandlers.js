export const notFound = (req, res, next) => {
  res.status(404).json({
    message: 'Page not found',
  });
  next();
};

export const errorHandler = (error, req, res) => {
  res.status(res.statusCode || 500);
  res.json({
    message: error.message,
    error: process.env.NODE_ENV === 'production' ? {} : error.stack,
  });
};
