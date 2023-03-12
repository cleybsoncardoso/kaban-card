import { Request, Response, NextFunction } from 'express';

export default (req: Request, res: Response, next: NextFunction) => {
  res.once('close', () => {
    if (res.statusCode === 200) {
      const id = req.params.id;
      const dateTime = new Date().toLocaleString('pt-br');
      if (req.method === 'PUT') {
        console.log(`${dateTime} - Card ${id} - ${req.description} - Alterado`);
      } else if (req.method === 'DELETE') {
        console.log(`${dateTime} - Card ${id} - ${req.description} - Removido`);
      }
    }
  });
  next();
};
