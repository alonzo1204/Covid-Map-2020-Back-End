module.exports = (sequelize, Sequelize) => {
    const Comment = sequelize.define("comment", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey: true
      },

      comment : {
        type: Sequelize.STRING
        
      },
      date : {
        type: Sequelize.DATE
        
      },
    });
  
    return Comment;
  };
  