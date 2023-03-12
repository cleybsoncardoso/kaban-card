import { Response } from 'express';
import { TemplateException } from '../exceptions/template.exception';

export default (err: unknown, res: Response) => {
  if (err instanceof Error) {
    console.error(err.stack);
  }

  if (err instanceof TemplateException) {
    return res
      .status((err as TemplateException).httpCode)
      .json({ message: err.message });
  }

  res.status(500).send('Internal server error');
};
