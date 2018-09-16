
module.exports = {
  PORT: process.env.PORT || 8083,
  db: {
    database: process.env.DB_NAME || 'MineSweeper',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || 'Jd00349689',
    options: {
      dialect: process.env.DIALECT || 'mysql',
      host: process.env.HOST || 'localhost'
    }
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}
