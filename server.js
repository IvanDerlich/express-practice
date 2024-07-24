const express = require("express");

const app = express();

app.listen(4564);

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { texteue: "Hello World" });
});

app.get("/users", (req, res) => {
  res.send("User List");
});

app.get("/users/new", (req, res) => {
  res.send("User Form");
});
