import { TemplateException } from './template.exception';

export class UnauthenticatedException extends TemplateException {
  public httpCode = 401;

  constructor() {
    super('unauthenticated');
  }
}
