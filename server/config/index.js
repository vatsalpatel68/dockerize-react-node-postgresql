const Sequelize = require('Sequelize');
const sequelize = new Sequelize(process.env.DB_DATABASE || "sample",process.env.DB_USERNAME || "user", process.env.DB_PASSWORD || "pass",{
  dialect: "postgres",
  host: process.env.DB_HOST || "localhost"
})


sequelize.authenticate()
.then(() => console.log('connected ....'))
.catch((err) => console.log(err));


module.exports = sequelize;