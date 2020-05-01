const db = require("../models");
const Comment = db.comment;

exports.getComments = (req, res) => {
    Comment.findAll()
      .then(comment => {
          res.status(200).send(comment);
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
};

exports.getCommentsById = (req, res) => {
  Comment.findAll({
    where: {
      id: req.params.id
    }
  }) .then(Comment => {
        res.status(200).send(Comment);
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.getCommentsByIdDataCountry = (req, res) => {
  Comment.findAll({
    where: {
      idDataCountry: req.params.idDataCountry
    }
  }) .then(Comment => {
        res.status(200).send(Comment);
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

exports.postComments = (req, res) => {
  Comment.create(req.body

) .then(Comment => {
      res.status(200).send(Comment);
  })
  .catch(err => {
    res.status(500).send({ message: err.message });
  });
};

exports.putComments = (req, res) => {
  Comment.update(req.body, {
    where: {
      id: req.params.id
    }
}).then( /*async*/ Comment => {
    return res.status(200).send({ message: "updated successfull" });


}) .catch(err => {
    res.status(500).send({ message: err.message });
  });
};

exports.deleteComments = (req, res) => {
  Comment.destroy({
    where: {
      id: req.params.id
    }
  }) .then(Comment => {
    if(Comment)
        res.status(200).send({ message: "delete successfull" });
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};