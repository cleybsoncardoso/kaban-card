import { ICard } from '../database/models/card';
import { ICardCreateAndUpdate } from '../dto/createCard';
import cardRepository from '../repositories/card';
import cardValidator from '../validators/card';

const findAll = (): Promise<ICard[]> => {
  return cardRepository.findAll();
};

const store = async (body: ICardCreateAndUpdate): Promise<ICard> => {
  cardValidator.validInsertAndUpdateBody(body);
  const { conteudo, lista, titulo } = body;
  return cardRepository.insert({
    conteudo,
    lista,
    titulo,
  });
};

const update = async (
  id: string,
  body: ICardCreateAndUpdate,
): Promise<ICard> => {
  cardValidator.validInsertAndUpdateBody(body);
  const { conteudo, lista, titulo } = body;
  return cardRepository.updateById(id, {
    conteudo,
    lista,
    titulo,
  });
};

const deleteById = async (id: string): Promise<ICard> => {
  return cardRepository.deleteById(id);
};

export default { findAll, store, update, deleteById };
