const { authJwt } = require("../middleware");
const controller = require("../controllers/question.controller");
  
module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });

    // Create a new Question
    app.post("/api/question/createQuestion",[authJwt.verifyToken, authJwt.isAdmin], controller.create);
  
    // Retrieve all Questions
    app.get("/api/question/getQuestion",[authJwt.verifyToken], controller.findAll);
  
    // Retrieve a single Question with id
    app.get("/api/question/getId/:id",[authJwt.verifyToken], controller.findOne);

    // Retrieve a bundle of Question based on category
    app.get("/api/question/getCategory/:category", [authJwt.verifyToken], controller.findByCategory);
  
    // Update a Question with id
    app.put("/api/question/updateId/:id",[authJwt.verifyToken, authJwt.isAdmin], controller.update);
  
    // Delete a Question with id
    app.delete("/api/question/deleteId/:id",[authJwt.verifyToken, authJwt.isAdmin], controller.delete);
  
    // Delete all Questions
    app.delete("/api/question/deleteAll",[authJwt.verifyToken, authJwt.isAdmin], controller.deleteAll);
};
