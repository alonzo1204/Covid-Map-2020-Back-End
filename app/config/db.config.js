const env = {
  database: 'd8r2d73uoi7a0',
  username: 'bdjtrlcafmylnk',
  password: '30abe4d3499d520e36c3724e9274c3544eb6486f31070e6eae6d5390bc00fbfe',
  host: 'ec2-18-215-99-63.compute-1.amazonaws.com',
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


// module.exports = {
//   HOST: "ec2-52-86-73-86.compute-1.amazonaws.com",
//   USER: "clvyhkqtqfqspa",
//   PASSWORD: "fe6ab5aa91011228bde17fcf75b1f157f88c2757a56a6b0269d0efaa4d457fe6",
//   DB: "d2garondopbc27",
//  // ssl:true,
//   dialect: "postgres",
//   dialectOptions: { ssl:true},
//   pool: {
//     max: 5,
//     min: 0,
//     acquire: 30000,
//     idle: 10000
//   }
// };

//  b23b6086dda687:5823d263@us-cdbr-iron-east-01.cleardb.net/heroku_985473d4e5bb72a?reconnect=true