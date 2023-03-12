import { Request, Response, NextFunction } from 'express';
import jwt, { JsonWebTokenError, TokenExpiredError } from 'jsonwebtoken';
import {
  ExpiratedTokenException,
  InvalidTokenException,
  UnauthenticatedException,
} from '../exceptions';

export interface IUserAuthInfoRequest extends Request {
  user: string;
}

export interface JwtPayload extends jwt.JwtPayload {
  user: string;
}

export default (req: Request, res: Response, next: NextFunction) => {
  const { JWT_SECRET } = process.env;
  const { authorization } = req.headers;

  if (!authorization) throw new UnauthenticatedException();

  const [tokenType, token] = authorization.split(' ');

  if (tokenType === 'Bearer' && token) {
    try {
      const decoded = jwt.verify(token, JWT_SECRET || '') as JwtPayload;
      req.user = decoded.user;
    } catch (err) {
      if (err instanceof TokenExpiredError) {
        throw new ExpiratedTokenException();
      }
      if (err instanceof JsonWebTokenError) {
        throw new InvalidTokenException();
      }
      throw err;
    }
  } else {
    throw new UnauthenticatedException();
  }

  next();
};
