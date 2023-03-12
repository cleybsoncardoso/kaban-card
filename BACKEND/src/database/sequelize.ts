import { Sequelize } from 'sequelize-typescript';

const sequelize = new Sequelize({
  database: 'db',
  dialect: 'sqlite',
  username: 'root',
  password: '',
  storage: ':memory:',
  models: [__dirname + '/models'],
  logging: process.env.SHOW_DATABASE_LOG === 'true',
});

export default sequelize;
