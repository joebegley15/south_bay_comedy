var express = require("express");
var router = express.Router();
var mongojs = require("mongojs");
var db = mongojs(
  "mongodb://joe:keypass1@ds151753.mlab.com:51753/south_bay_mic_info",
  ["shows"]
);

// Get single tasks
router.get("/show/:id", (req, res, next) => {
  db.shows.findOne({ _id: mongojs.ObjectId(req.params.id) }, (err, show) => {
    if (err) {
      res.send(err);
    } else {
      res.json(show);
    }
  });
});

// Get all tasks
router.get("/shows/", (req, res, next) => {
  db.shows.find((err, shows) => {
    if (err) {
      res.send(err);
    } else {
      res.json(shows);
    }
  });
});

// Add a task
router.route("/show").post(function(req, res) {
  var error = false;
  var show = req.body;
  if (error) {
    res.status(400);
    res.json({
      error: "bad data " + [...errors]
    });
  } else {
    db.shows.save(show, function(err, show) {
      if (err) {
        res.send(err);
      } else {
        res.json(show);
      }
    });
  }
});

// Delete
router.get("/show/:id", (req, res, next) => {
  db.shows.remove({ _id: mongojs.ObjectId(req.params.id) }, (err, show) => {
    if (err) {
      res.send(err);
    } else {
      res.json(show);
    }
  });
});

//Update
router.put("/show/:id", (req, res, next) => {
  var show = req.body;
  var updShow = {};
  if (!updShow) {
    res.send(400);
    res.json({ error: "bad data" });
  } else {
    db.shows.update(
      { _id: mongojs.ObjectId(req.params.id) },
      updShow,
      {},
      (err, show) => {
        if (err) {
          res.send(err);
        } else {
          res.json(show);
        }
      }
    );
  }
});

//Export
module.exports = router;
