import jwt from 'jsonwebtoken';
import { LoginOrPasswordInvalidException } from '../exceptions';

const login = (login: string, senha: string) => {
  const { APP_LOGIN, APP_PASS, JWT_SECRET } = process.env;

  if (login === APP_LOGIN && senha === APP_PASS) {
    const token = jwt.sign({ user: login }, JWT_SECRET || '', {
      expiresIn: '1 days',
    });
    return token;
  }
  throw new LoginOrPasswordInvalidException();
};

export default { login };
