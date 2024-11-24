import * as Joi from 'joi';

const schema = Joi.object({
  host: Joi.string().required(),
  port: Joi.number().required(),
  user: Joi.string().required(),
  password: Joi.string().required(),
  database: Joi.string().required(),
  ssl: Joi.boolean().default(false)
});

export interface IDbConfig {
  host: string;
  port: number;
  user: string;
  password: string;
  database: string;
  ssl: boolean;
}
const config = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  ssl: process.env.SSL
};

export default Joi.attempt(config, schema) as IDbConfig;
