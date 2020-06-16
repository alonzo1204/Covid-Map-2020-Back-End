//Base de datos Local


// const env = {
//   database: 'testdb',
//   username: 'postgres',
//   password: '12345678',
//   host: 'localhost',
//   port: 5432,
//   dialect: 'postgres',
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   }
// };
// module.exports = env;

//Servidor de base de datos CleverCloud
const env = {
  database: 'ba8kmpucanuh6rhnpqi9',
  username: 'ul8kythfefk46oovylyl',
  password: 'mUEe8vXipotcIC5QKdDs',
  host: 'ba8kmpucanuh6rhnpqi9-postgresql.services.clever-cloud.com',
  port: 5432,
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
 
module.exports = env;
