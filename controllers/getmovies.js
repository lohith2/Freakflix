const Movie = require("../models/movie");

const getmovies = (req, res) => {
  Movie.find({ Genre: req.body.gener })
    .sort({ Rating: -1 })
    .then((movies) => {
      res.send(movies);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        error: "Error while retriving movies",
      });
    });
};

const upadategener = async (req, res) => {

    try {
      const id = req.params.id;
      const updates = req.body.Genre;
      const options = { new: true };

      const result = await Movie.findByIdAndUpdate(id,updates,options);
      if (!result) {
        throw createError(404, 'does not exist');
      }
      console.log(result);
      res.send(result);
    } catch (error) {
      console.log(error.message);
      if (error instanceof mongoose.CastError) {
        return next(createError(400, 'InvalidId'));
      }

      next(error);
    }
  }

module.exports = { getmovies, upadategener };
