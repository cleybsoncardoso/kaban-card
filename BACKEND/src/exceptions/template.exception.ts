export class TemplateException extends Error {
  public httpCode = 500;

  constructor(message: string) {
    super(message);
  }
}
