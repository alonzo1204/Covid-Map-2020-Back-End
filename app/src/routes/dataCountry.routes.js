const { authJwt } = require("../middleware");
const controller = require("../controllers/dataCountry.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/test/dataCountries", controller.getDataCountries); //ya
  app.get("/api/test/getDataCountriesFormatMap", controller.getDataCountriesFormatMap);//ya
  app.get("/api/test/getDataCountriesTreeGrid", controller.getDataCountriesTreeGrid);//ya
  app.get("/api/test/dataCountries/:id", controller.getDataCountriesById); //ya
  app.get("/api/test/getCountriesByContinent", controller.getCountriesByContinent);
  app.get("/api/test/getTopFiveCountries", controller.getTopFiveCountries);
  app.post("/api/test/dataCountries", controller.postDataCountries); //ya
  app.put("/api/test/dataCountries/:id", controller.putDataCountries);//ya
  app.delete("/api/test/dataCountries", controller.truncateDataCountries);//
  app.delete("/api/test/dataCountries/:id", controller.deleteDataCountries);//ya
 
};
