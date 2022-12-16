const db = require("../models");
const User = db.user;
  
exports.updateLevel1 = (req, res) => {
  const id = req.userId

  User.findByPk(id)
  .then(data => {
    if (!data) {
        return res.status(403).send({ message: "not yours" });
    }
    User.update({
        level1: req.body.score
    },
    {
      where : {id:id}
    }).then(info => {
        return res.send({ message: "Updated" });
    }).catch(err => {
        console.log(err);
        res.status(500).send({ message: err.message });
    });
}).catch(err => {
    console.log(err);
    res.status(500).send({ message: err.message });
});
};

exports.updateLevel2 = (req, res) => {
  const id = req.userId

  User.findByPk(id)
  .then(data => {
    if (!data) {
        return res.status(403).send({ message: "not yours" });
    }
    User.update({
        level2: req.body.score
    },
    {
      where : {id:id}
    }).then(info => {
        return res.send({ message: "Updated" });
    }).catch(err => {
        console.log(err);
        res.status(500).send({ message: err.message });
    });
}).catch(err => {
    console.log(err);
    res.status(500).send({ message: err.message });
});
};

exports.updateLevel3 = (req, res) => {
  const id = req.userId

  User.findByPk(id)
  .then(data => {
    if (!data) {
        return res.status(403).send({ message: "not yours" });
    }
    User.update({
        level3: req.body.score
    },
    {
      where : {id:id}
    }).then(info => {
        return res.send({ message: "Updated" });
    }).catch(err => {
        console.log(err);
        res.status(500).send({ message: err.message });
    });
}).catch(err => {
    console.log(err);
    res.status(500).send({ message: err.message });
});
};

exports.updateScore1 = (req, res) => {
  const id = req.userId

  User.findByPk(id)
  .then(data => {
    if (!data) {
        return res.status(403).send({ message: "not yours" });
    }
    User.update({
        score1: req.body.score
    },
    {
      where : {id:id}
    }).then(info => {
        return res.send({ message: "Updated" });
    }).catch(err => {
        console.log(err);
        res.status(500).send({ message: err.message });
    });
}).catch(err => {
    console.log(err);
    res.status(500).send({ message: err.message });
});
};

exports.updateScore2 = (req, res) => {
  const id = req.userId

  User.findByPk(id)
  .then(data => {
    if (!data) {
        return res.status(403).send({ message: "not yours" });
    }
    User.update({
        score2: req.body.score
    },
    {
      where : {id:id}
    }).then(info => {
        return res.send({ message: "Updated" });
    }).catch(err => {
        console.log(err);
        res.status(500).send({ message: err.message });
    });
}).catch(err => {
    console.log(err);
    res.status(500).send({ message: err.message });
});
};

exports.updateScore3 = (req, res) => {
  const id = req.userId

  User.findByPk(id)
  .then(data => {
    if (!data) {
        return res.status(403).send({ message: "not yours" });
    }
    User.update({
        score3: req.body.score
    },
    {
      where : {id:id}
    }).then(info => {
        return res.send({ message: "Updated" });
    }).catch(err => {
        console.log(err);
        res.status(500).send({ message: err.message });
    });
}).catch(err => {
    console.log(err);
    res.status(500).send({ message: err.message });
});
};

exports.updateStarsCount = (req, res) => {
  const id = req.userId

  User.findByPk(id)
  .then(data => {
    if (!data) {
        return res.status(403).send({ message: "not yours" });
    }
    User.increment({ stars_count: +req.body.stars },
    {
      where : {id:id}
    }).then(info => {
        return res.send({ message: "Updated" });
    }).catch(err => {
        console.log(err);
        res.status(500).send({ message: err.message });
    });
}).catch(err => {
    console.log(err);
    res.status(500).send({ message: err.message });
});
};

exports.updateScoreTotal = (req, res) => {
  const id = req.userId

  User.findByPk(id)
  .then(data => {
    if (!data) {
        return res.status(403).send({ message: "not yours" });
    }
    User.increment({ score_total: +req.body.score},
    {
      where : {id:id}
    }).then(info => {
        return res.send({ message: "Updated" });
    }).catch(err => {
        console.log(err);
        res.status(500).send({ message: err.message });
    });
}).catch(err => {
    console.log(err);
    res.status(500).send({ message: err.message });
});
};

exports.getDetails = (req, res) => {
  const id = req.userId;

  User.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find User with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving User with id=" + id
      });
    });
};

exports.getLeaderboard = (req, res) => {
  User.findAll({order: [
    ['score_total', 'DESC'],
]})
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