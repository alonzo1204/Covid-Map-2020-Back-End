const db = require("../models");
const DataCountry = db.dataCountry;
const moment = require("moment")
const _ = require('lodash')

const arrayContinent = ['Asia', 'Europe', 'Oceania', 'North America', 'South America','Africa']

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
        data.Pais = iterator.country,
        data.Continente = iterator.continent,
        data.Casos = iterator.cases,
        data.Enfermos = iterator.active,
        data.Casos_Criticos = iterator.critical,
        data.Recuperados = iterator.recovered,
        data.Fallecidos = iterator.deaths,
        data.Muestras_Tomadas = iterator.totalTests,
        data.Casos_Recientes = iterator.todayCases,
        data.Muertes_Recientes = iterator.todayDeaths,
        data.Fecha = iterator.createdAt
        response.push({data})
                
       }
       res.status(200).send({response:response});
      
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};
exports.getCountriesByContinent = (req,res)=> {
  DataCountry.findAll()
  .then(async detailCountry => {
    let reponse = {}
    reponse.header = arrayContinent
    reponse.body = []
    for (let i of arrayContinent){
      let groupByContent = await DataCountry.findAll({
        where: {
          continent: i
        }
      })
      let cases = groupByContent.reduce((sum, value) => (typeof value.dataValues.cases == "number" ? sum + value.dataValues.cases : sum), 0);
      let body = {cases:cases,name:i}
      reponse.body.push(body)
    }
    res.status(200).send(reponse);
  })
  .catch(err => {
    res.status(500).send({ message: err.message });
  });
}
exports.getTopFiveCountries = (req, res) => {
  DataCountry.findAll()
  .then(detailCountry => {
    let response = []
    c = 0
    for (const iterator of detailCountry) { 
      let data = {}
      data.Pais = iterator.country,
      data.Casos = iterator.cases
      if (c > 0 && c <6){
        response.push({data})
      }
      c = c + 1
    }
    res.status(200).send({response:response});
  })
  .catch(err => {
    res.status(500).send({ message: err.message });
  });
}