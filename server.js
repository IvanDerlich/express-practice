const express = require("express");

const app = express();

app.listen(4564);

app.get("/", (req, res) => {
  res.send("Hello World!");
});
