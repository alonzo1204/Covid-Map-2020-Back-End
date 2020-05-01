module.exports = (sequelize, Sequelize) => {
    const Comment = sequelize.define("comment", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey: true
      },
      idDataCountry: {
        type: Sequelize.INTEGER,
        references: {
          model: 'dataCountries',//name of bd
          key: 'id',
        }
      },
      idUsername: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',//name of bd
          key: 'id',
        }
      },
      username: {
        type: Sequelize.STRING
      },
      comment : {
        type: Sequelize.STRING
        
      }
    });
  
    return Comment;
  };
  