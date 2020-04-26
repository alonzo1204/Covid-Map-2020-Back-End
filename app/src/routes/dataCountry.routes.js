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

  app.get("/api/test/dataCountries", controller.getDataCountries);
  app.get("/api/test/getDataCountriesFormatMap", controller.getDataCountriesFormatMap);
  app.get("/api/test/getDataCountriesTreeGrid", controller.getDataCountriesTreeGrid);
  app.get("/api/test/dataCountries/:id", controller.getDataCountriesById);
  app.post("/api/test/dataCountries", controller.postDataCountries);
  app.put("/api/test/dataCountries/:id", controller.putDataCountries);
  app.delete("/api/test/dataCountries", controller.truncateDataCountries);
  app.delete("/api/test/dataCountries/:id", controller.deleteDataCountries);
 
};
