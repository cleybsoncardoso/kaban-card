import { TemplateException } from './template.exception';

export class CardNotFoundException extends TemplateException {
  public httpCode = 404;

  constructor() {
    super('Card not found');
  }
}
