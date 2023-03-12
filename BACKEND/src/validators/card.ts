import { CardFieldRequiredException } from '../exceptions';

const validInsertAndUpdateBody = (body: any) => {
  const requiredValues = ['conteudo', 'titulo', 'lista'];
  requiredValues.forEach(requiredValue => {
    if (!body[requiredValue])
      throw new CardFieldRequiredException(requiredValue);
  });
};

export default { validInsertAndUpdateBody };
