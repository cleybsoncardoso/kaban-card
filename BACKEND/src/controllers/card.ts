import { Request, Response } from 'express';
import cardService from '../services/card';
import errorResponse from '../utils/errorResponse';

const findAll = async (_req: Request, res: Response) => {
  try {
    const cardList = await cardService.findAll();
    return res.json(cardList);
  } catch (err) {
    return errorResponse(err, res);
  }
};

const store = async (req: Request, res: Response) => {
  try {
    const card = await cardService.store(req.body);
    return res.status(201).json(card);
  } catch (err) {
    return errorResponse(err, res);
  }
};

const update = async (req: Request, res: Response) => {
  try {
    const cardUpdated = await cardService.update(req.params.id, req.body);
    req.description = cardUpdated.titulo;
    res.json(cardUpdated);
  } catch (err) {
    return errorResponse(err, res);
  }
};

const destroy = async (req: Request, res: Response) => {
  try {
    const cardRemoved = await cardService.deleteById(req.params.id);
    req.description = cardRemoved.titulo;
    return findAll(req, res);
  } catch (err) {
    return errorResponse(err, res);
  }
};

export default { findAll, store, update, destroy };
