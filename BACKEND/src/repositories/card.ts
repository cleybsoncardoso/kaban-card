import Card, { ICard } from '../database/models/card';
import { ICardCreateAndUpdate } from '../dto/createCard';
import { v4 as uuidv4 } from 'uuid';
import { CardNotFoundException } from '../exceptions';

const findAll = async (): Promise<ICard[]> => {
  return Card.findAll();
};

const insert = async (data: ICardCreateAndUpdate): Promise<ICard> => {
  const id = uuidv4();
  return Card.create({ ...data, id });
};

const updateById = async (
  id: string,
  data: ICardCreateAndUpdate,
): Promise<ICard> => {
  const cardFound = await Card.findByPk(id);

  if (!cardFound) throw new CardNotFoundException();

  await cardFound.update({ ...data });
  return cardFound;
};

const deleteById = async (id: string): Promise<ICard> => {
  const cardFound = await Card.findByPk(id);

  if (!cardFound) throw new CardNotFoundException();

  await cardFound.destroy();

  return cardFound;
};

export default { findAll, insert, updateById, deleteById };
