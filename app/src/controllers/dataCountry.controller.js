const db = require("../models");
const DataCountry = db.dataCountry;
const moment = require("moment")

exports.getDataCountries = (req, res) => {
    DataCountry.findAll()
      .then(detailCountry => {
          res.status(200).send(detailCountry);
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
};

exports.getDataCountriesById = (req, res) => {
    DataCountry.findAll({
      where: {
        id: req.params.id
      }
    }) .then(Datacountry => {
          res.status(200).send(Datacountry);
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
};
//fijate aca nada mas
exports.postDataCountries = (req, res) => {
      DataCountry.create(req.body
        /*{        
      country: req.body.country,
      cases: req.body.cases,
      todayCases:req.body.todayCases,
      deaths:req.body.deaths,
      todayDeaths:req.body.todayDeaths,
      recovered:req.body.recovered,
      active:req.body.active,
      critical:req.body.critical,
      casesPerOneMillion: req.body.casesPerOneMillion,
      deathsPerOneMillion: req.body.deathsPerOneMillion,
      totaltest:req.body.totaltest,
      testsPerOneMillion: req.body.testsPerOneMillion,
      idComment: req.body.idComment,
    }*/
    ) .then(Datacountry => {
          res.status(200).send(Datacountry);
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
};

exports.putDataCountries = (req, res) => {
    DataCountry.update(req.body, {
      where: {
        id: req.params.id
      }
  }).then( /*async*/ Datacountry => {
      return res.status(200).send({ message: "updated successfull" });


}) .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.deleteDataCountries = (req, res) => {
    DataCountry.destroy({
      where: {
        id: req.params.id
      }
    }) .then(Datacountry => {
      if(Datacountry)
          res.status(200).send({ message: "delete successfull" });
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
};

exports.truncateDataCountries = (req, res) => {
  DataCountry.destroy({
     truncate : true, 
     restartIdentity:true,
     force:true 
    }) .then(Datacountry => {    
        res.status(200).send({ message: "truncated successfull" });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.getDataCountriesFormatMap = (req, res) => {
  // let start = moment().startOf('day').format()
  // let end = moment().endOf('day').format()
  // console.log({
  //   start,
  //   end
  // })
  // DataCountry.findAll(
  //  {
  //   createdAt: {
  //     type: DataTypes.DATEONLY,
  //     get: function() {
  //       return moment.utc(this.getDataValue('createdAt')).format('YYYY-MM-DD');
  //     }
  //   }
  // }
  // )
  DataCountry.findAll()
    .then(detailCountry => {
      let response = {}
       response.latlong = {}
       response.mapData = []
       for (const iterator of detailCountry) {        
         //filtrar por today      
          response.latlong[iterator.codeCountry] = {
            "latitude":iterator.latitude === "" ? "": Number(iterator.latitude),
            "longitude":iterator.longitude === "" ? "":Number(iterator.longitude)
          }
          let mapDatas = {
            "code": iterator.codeCountry,
            "name":iterator.country,
            "value":iterator.cases
          }
          response.mapData.push(mapDatas)
       }
        res.status(200).send(response);
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.getDataCountriesTreeGrid = (req, res) => {
  DataCountry.findAll()
    .then(detailCountry => {
      let response = []
      
       for (const iterator of detailCountry) {        
  
          let data = {}
        // data.name = iterator.codeCountry,
        // data.country = iterator.country,
        // data.cases = iterator.cases,
        // data.todayCases = iterator.todayCases,
        // data.deaths = iterator.deaths,
        // data.todayDeaths = iterator.todayDeaths,
        // data.createdAt = iterator.createdAt
        // response.push({data})
        data.name = iterator.country,
        data.cases = iterator.cases,
        data.active = iterator.active,
        data.critical = iterator.critical,
        data.recovered = iterator.recovered,
        data.deaths = iterator.deaths,
        data.totalTests = iterator.totalTests,
        data.todayCases = iterator.todayCases,
        data.todayDeaths = iterator.todayDeaths,
        data.createdAt = iterator.createdAt
        response.push({data})
                
       }
       res.status(200).send({response:response});
      
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};