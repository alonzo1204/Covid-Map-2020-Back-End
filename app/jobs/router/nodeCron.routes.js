const controller = require('../../microservice/controllers/apiCovid.controller')
const {validaterNodeCron} = require('../helper/validator')
/*
 # ┌────────────── second (optional)
 # │ ┌──────────── minute
 # │ │ ┌────────── hour
 # │ │ │ ┌──────── day of month
 # │ │ │ │ ┌────── month
 # │ │ │ │ │ ┌──── day of week
 # │ │ │ │ │ │
 # │ │ │ │ │ │
 # * * * * * *
*/
module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });
    app.get('/nodeCron/consumerApiCovid',
    (validaterNodeCron('0 0 10 * * *',controller.consumerApiCovid)) //8:00:00
    //(validaterNodeCron('0 0 8 * * *',controller.consumnperApiCovid)) //8:00:00
    )
    app.get('/nodeCron/fillingDataCountries',
    (validaterNodeCron('30 0 10 * * *',controller.fillingDataCountries))//8:00:30
    )
  };
