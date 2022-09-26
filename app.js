let express = require("express");
const { characters } = require("./data/characters");

let app = express();
app.listen(4000);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/characters", (req, res) => {
  res.send(characters);
});

app.get("/characters/:id", (req, res) => {
  const id = req.params.id;
  res.send(
    // "I'm what's going to send over"
    characters.find((character) => character.id === +id)
  );
});
