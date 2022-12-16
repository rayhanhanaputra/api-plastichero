const db = require("../models");
const Question = db.question;
const Op = db.Sequelize.Op;

// Create and Save a new Question
exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a Question
    const Question = {
      question: req.body.question,
      solution: req.body.solution,
      answer: req.body.answer ? req.body.answer : false,
      category: req.body.category,
    };
  
    // Save Question in the database
    Question.create(Question)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Question."
        });
      });
  };

// Retrieve all Questions from the database.
exports.findAll = (req, res) => {
    const question = req.query.question;
    var condition = question ? { question: { [Op.like]: `%${question}%` } } : null;
  
    Question.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving questions."
        });
      });
  };

// Find a single Question with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Question.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find Question with id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Question with id=" + id
        });
      });
  };

// Find a single Question with an id
exports.findByCategory = (req, res) => {
  const category = req.params.category;

  Question.findAll({
    where: { category: category }
    })
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Question with category=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Question with category=" + id
      });
    });
};

// Update a Question by the id in the request
exports.update = (req, res) => {
    const id = req.params.id;
  
    Question.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Question was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Question with id=${id}. Maybe Question was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Question with id=" + id
        });
      });
  };

// Delete a Question with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Question.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Question was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Question with id=${id}. Maybe Question was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Question with id=" + id
        });
      });
  };

// Delete all Questions from the database.
exports.deleteAll = (req, res) => {
  Question.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Questions were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all questions."
      });
    });
};