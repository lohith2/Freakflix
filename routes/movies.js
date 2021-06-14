const express = require("express");

const movie = require("../controllers/getmovies");

const router = express.Router();

router.post("/getmovies", movie.getmovies);
router.post("/updategener", movie.upadategener);

module.exports = router;
