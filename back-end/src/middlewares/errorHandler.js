const errorHandler = (err, _req, res, _next) => {
  const errorTypes = {
    ValidationError: 400,
    NotFoundError: 404,
    UnauthorizedError: 401,
    ConflictError: 409,
  };

  const status = errorTypes[err.name] || 500;
  const message = err.message || 'Internal Server Error';

  return res.status(status).json({ message });
};

module.exports = errorHandler;