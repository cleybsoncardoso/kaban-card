import { Request, Response } from 'express';
import authService from '../services/auth';

const login = (req: Request, res: Response) => {
  const { login, senha } = req.body;
  const token = authService.login(login, senha);
  return res.json(token);
};

export default { login };
