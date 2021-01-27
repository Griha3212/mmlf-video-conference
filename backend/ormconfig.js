/* eslint-disable import/no-unresolved */
console.log('process.env.NODE_ENV', process.env.NODE_ENV);
const config = require('./build/config/config')[process.env.NODE_ENV];

// if port exists, staging version started, else it's a local version
if (process.env.PORT) {
  // stage dataBase connection
  module.exports = {
    type: 'postgres',
    host: config.POSTGRES_HOST,
    port: 5432,
    username: config.POSTGRES_USER,
    password: config.POSTGRES_PASSWORD,
    database: config.POSTGRES_DB,
    synchronize: true,
    logging: false,
    entities: [
      'build/entities/**/*.js',
    ],
    migrations: [
      'build/migration/**/*.js',
    ],
    subscribers: [
      'build/subscriber/**/*.js',
    ],
    cli: {
      entitiesDir: 'build/entities',
      migrationsDir: '/build/migration',
      subscribersDir: '/build/subscriber',
    },
  };
} else {
  // local dataBase connection
  module.exports = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'sNpFXdDbQ]V2H~*f',
    database: 'mmlfdb',
    synchronize: true,
    logging: false,
    entities: [
      'build/entities/**/*.js',
    ],
    migrations: [
      'build/migrations/**/*.js',
    ],
    subscribers: [
      'build/subscriber/**/*.js',
    ],
    cli: {
      entitiesDir: 'build/entities',
      migrationsDir: 'src/migrations',
      subscribersDir: '/build/subscriber',
    },
    seeds: ['seeds/**/*.seed.ts'],
    factories: ['factories/**/*.factory.ts'],
  };
}
