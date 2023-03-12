import { TemplateException } from './template.exception';

export class ExpiratedTokenException extends TemplateException {
  public httpCode = 401;

  constructor() {
    super('Expirated token');
  }
}
