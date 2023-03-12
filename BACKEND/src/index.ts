import * as dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import helmet from 'helmet';
import express from 'express';
import bodyParser from 'body-parser';
import noCache from 'nocache';
import routes from './routes';
import errorHandling from './middleware/errorHandling';
import sequelize from './database/sequelize';

const app = express();

app.use(cors());
app.use(helmet());
app.use(noCache());
app.use(bodyParser.json());

routes(app);

sequelize.sync().then(() => console.log('Database OK'));

errorHandling(app);

app.use((req, res) => res.status(404).send({ message: 'Not Found' }));

app.listen(process.env.PORT || 5000, () => {
  console.log('Server Up!');
});
