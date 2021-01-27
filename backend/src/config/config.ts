module.exports = {

  prod: {
    POSTGRES_USER: process.env.POSTGRES_USER || 'postgres',
    POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD || 'sNpFXdDbQ]V2H~*f',
    POSTGRES_DB: process.env.POSTGRES_DB || 'mmlfdb',
    POSTGRES_HOST: process.env.POSTGRES_HOST || 'db',
    logging: false,
    dialect: 'postgres',
  },

};
