import { ErrorRequestHandler, Express } from 'express';
import errorResponse from '../utils/errorResponse';

export default (app: Express): void => {
  const errorHandler: ErrorRequestHandler = (err, _req, res) =>
    errorResponse(err, res);

  app.use(errorHandler as ErrorRequestHandler);
};
