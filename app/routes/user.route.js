const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post("/api/user/setLevel1",[authJwt.verifyToken], controller.updateLevel1);
  app.post("/api/user/setLevel2",[authJwt.verifyToken], controller.updateLevel2);
  app.post("/api/user/setLevel3",[authJwt.verifyToken], controller.updateLevel3);
  app.post("/api/user/setScore1",[authJwt.verifyToken], controller.updateScore1);
  app.post("/api/user/setScore2",[authJwt.verifyToken], controller.updateScore2);
  app.post("/api/user/setScore3",[authJwt.verifyToken], controller.updateScore3);
  app.post("/api/user/setStarsCount",[authJwt.verifyToken], controller.updateStarsCount);
  app.post("/api/user/setScoreTotal",[authJwt.verifyToken], controller.updateScoreTotal);
  app.get('/api/user/getDetails', [authJwt.verifyToken], controller.getDetails)
  app.get('/api/user/getLeaderboard', [authJwt.verifyToken], controller.getLeaderboard)
};