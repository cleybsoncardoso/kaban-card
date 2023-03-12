import { Express } from 'express';
import authController from './controllers/auth';
import cardController from './controllers/card';
import jwtAuth from './middleware/jwtAuth';
import updateAndRemoveCardLog from './middleware/updateAndRemoveCardLog';

export default (app: Express) => {
  // LOGIN
  app.post('/login', authController.login);

  // CARD module
  app.use(jwtAuth);
  app.use('/cards/:id', updateAndRemoveCardLog);
  app.get('/cards', cardController.findAll);
  app.post('/cards', cardController.store);
  app.put('/cards/:id', cardController.update);
  app.delete('/cards/:id', cardController.destroy);
};
