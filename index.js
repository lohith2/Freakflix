const mongoose = require("mongoose");
const express = require("express");
const movie = require("./routes/movies");

var cors = require("cors");

const app = express();

mongoose
  .connect(
    "mongodb+srv://lohith:DrPZAdxwO5ke5Fb3@cluster0.hkuaw.mongodb.net/lohith?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("connected to mongoose.....");
  })
  .catch((err) => {
    console.log("could not connect to db..", err);
  });

app.use(express.json());
app.use(cors());

app.post("/getmovies", movie);
app.post("/updategener", movie);

const port = process.env.PORT|8000;
console.log(port);

app.listen(port, () => {
  console.log(`listening on port ${port}...`);
});
