module.exports = {
  HOST: "localhost",
  USER: "clement",
  PASSWORD: "roler260990",
  DB: "jwt_auth",
  PORT: 3336,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};