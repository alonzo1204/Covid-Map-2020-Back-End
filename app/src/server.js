const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const node_cron = require("../jobs/index").main;
const {createConnectionLowdb} = require('../microservice/lowdbConnection')
const confi = require('../config/db.config');

createConnectionLowdb()

// var myList = ['https://covid-map-2020-front-end.herokuapp.com', 'http://localhost:4200']

//  var corsOptions = {


//   origin: function (origin, callback) {
//     if (myList.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }

var whitelist = ['https://covid-map-2020-front-end.herokuapp.com', 'http://localhost:4200']
var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (whitelist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true } // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false } // disable CORS for this request
  }
  callback(null, corsOptions) // callback expects two parameters: error and options
}


// var corsOptions = {
//   origin: "https://covid-map-2020-front-end.herokuapp.com"
// };


app.use(cors(corsOptionsDelegate));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// const PORT = process.env.PORT || 8080;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}.`);
//   node_cron()
// });

var server = app.listen(process.env.PORT || 8080, function () {
 
  var host = server.address().address
  var port = server.address().port
  node_cron()
  console.log("App listening at http://%s:%s", host, port)
})
// database
const db = require("./models");
const Role = db.role;


db.sequelize.sync();

//elimina la data antigua
// db.sequelize.sync({force: true}).then(() => {
//   console.log('Drop and Resync with { force: true }');
//   initial();
// });

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Covid application." });
});
// routes microservice
app.use(require('../microservice/routes/apiCovid.routes'))

require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);
require('./routes/dataCountry.routes')(app);
require('./routes/comment.routes')(app);
require('./routes/comment.routes')(app);
require('../jobs/router/nodeCron.routes')(app)
// set port, listen for requests

function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "admin"
  });
 

}