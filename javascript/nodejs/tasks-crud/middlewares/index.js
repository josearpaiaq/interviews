export const errorMiddleware = (err, req, res, next) => {
  const statusCode = err.statusCode ?? 500;
  if (statusCode === 500) console.error(err);
  res
    .status(statusCode)
    .json({ error: { message: err.message, status: statusCode } });
};
