module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
      username: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      level1:{
        type: Sequelize.INTEGER,
        defaultValue:0
      },
      level2:{
        type: Sequelize.INTEGER,
        defaultValue:0
      },
      level3:{
        type: Sequelize.INTEGER,
        defaultValue:0
      },
      score1:{
        type: Sequelize.INTEGER,
        defaultValue:0
      },
      score2:{
        type: Sequelize.INTEGER,
        defaultValue:0
      },
      score3:{
        type: Sequelize.INTEGER,
        defaultValue:0
      },
      stars_count:{
        type: Sequelize.INTEGER,
        defaultValue:0
      },
      score_total:{
        type: Sequelize.INTEGER,
        defaultValue:0
      },
    });
  
    return User;
  };