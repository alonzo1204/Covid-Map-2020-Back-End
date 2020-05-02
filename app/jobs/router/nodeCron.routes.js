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
    //Descomentar para que se ejecute al inciciar el back
    //app.get('/nodeCron/consumerApiCovid',controller.consumerApiCovid)
   // app.get('/nodeCron/fillingDataCountries',controller.fillingDataCountries)


    //Descomentar para que se ejecute a la hora indicada
    app.get('/nodeCron/consumerApiCovid',(validaterNodeCron('0 20 13 * * *',controller.consumerApiCovid)))
    app.get('/nodeCron/fillingDataCountries',(validaterNodeCron('30 20 13 * * *',controller.fillingDataCountries)))
    
  };
