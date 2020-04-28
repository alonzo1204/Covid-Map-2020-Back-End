const { authJwt } = require("../middleware");
const controller = require("../controllers/comment.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });


  app.get("/api/test/comments", controller.getComments);
  app.get("/api/test/comments/:id", controller.getCommentsById);
  app.get("/api/test/comments/:idDataCountry", controller.getCommentsByIdDataCountry);
  app.post("/api/test/comments", controller.postComments);
  app.put("/api/test/comments/:id", controller.putComments);
  app.delete("/api/test/comments/:id", controller.deleteComments);

};
