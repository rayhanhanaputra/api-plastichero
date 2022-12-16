module.exports = (sequelize, Sequelize) => {
    const Question = sequelize.define("questions", {
      question: {
        type: Sequelize.STRING
      },
      solution: {
        type: Sequelize.STRING
      },
      answer: {
        type: Sequelize.BOOLEAN
      },
      category: {
        type: Sequelize.INTEGER
      },
      image:{
        type: Sequelize.STRING
      }
    });
  
    return Question;
  };