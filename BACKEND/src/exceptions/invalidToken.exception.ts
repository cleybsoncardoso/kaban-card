import { TemplateException } from './template.exception';

export class InvalidTokenException extends TemplateException {
  public httpCode = 403;

  constructor() {
    super('Invalid token');
  }
}
