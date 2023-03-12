import { TemplateException } from './template.exception';

export class CardFieldRequiredException extends TemplateException {
  public httpCode = 400;

  constructor(campo: string) {
    super(`the ${campo} field is required`);
  }
}
