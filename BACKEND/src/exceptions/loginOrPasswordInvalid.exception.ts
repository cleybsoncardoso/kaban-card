import { TemplateException } from './template.exception';

export class LoginOrPasswordInvalidException extends TemplateException {
  public httpCode = 401;

  constructor() {
    super('Login or password invalid');
  }
}
