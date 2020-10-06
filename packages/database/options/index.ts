import { IDBOptions } from './model';

const options: IDBOptions = {
  name: process.env.DATABASE_CONFIG_NAME,
  host: process.env.DATABASE_CONFIG_HOSTNAME,
  port: parseInt(process.env.DATABASE_CONFIG_PORT, 10),
  db: process.env.DATABASE_CONFIG_DB,
  auth: {
    enabled: process.env.DATABASE_CONFIG_AUTH === 'enabled',
    username: process.env.DATABASE_CONFIG_USERNAME,
    password: process.env.DATABASE_CONFIG_PASSWORD
  },
  rs: process.env.DATABASE_CONFIG_REPLICA_SET,
  debug: !!process.env.DATABASE_CONFIG_DEBUG,
  mode: process.env.DATABASE_CONFIG_MODE
};

export default options;
