module.exports = (sequelize, Sequelize) => {
    const DataCountry = sequelize.define("dataCountry", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey: true
      },
      codeCountry:{
        type: Sequelize.STRING
      },
      country: {
        type: Sequelize.STRING
        
      },
      continent: {
        type: Sequelize.STRING
        
      },
      cases: {
        type: Sequelize.INTEGER
        
      },
      todayCases: {
        type: Sequelize.INTEGER
        
      },      
      deaths: {
        type: Sequelize.INTEGER
        
      },
      todayDeaths: {
        type: Sequelize.INTEGER
        
      },
      recovered: {
        type: Sequelize.INTEGER
        
      },                      
      active: {
        type: Sequelize.INTEGER
        
      },
      critical: {
        type: Sequelize.INTEGER
        
      },

      casesPerOneMillion: {
        type: Sequelize.INTEGER
        
      },
      deathsPerOneMillion: {
        type: Sequelize.INTEGER
        
      },
      totalTests: {
        type: Sequelize.INTEGER
        
      },     
      testsPerOneMillion: {
        type: Sequelize.INTEGER
        
      },     
      latitude:{
        type: Sequelize.STRING
      },
      longitude:{
        type: Sequelize.STRING
      }        
    });
  
    return DataCountry;
  };
  