require("dotenv").config();

const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT, MIGRATION_PATH } = process.env;

module.exports = {
  development: {
    client: "pg",
    connection: {
      host: DB_HOST,
      user: DB_USER,
      password: DB_PASSWORD,
      database: DB_NAME,
      port: DB_PORT, 
    },   
    migrations: {
      directory: MIGRATION_PATH,
      disableMigrationsListValidation: true
    }
  }
};