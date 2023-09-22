module.exports = {
    type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "priya@123",
      database: "postgres",
      entities:['../src/entities'],
      synchronize:true
}