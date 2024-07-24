const express = require("express");

const app = express();

app.listen(4564);

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { texteue: "Hello World" });
});

const userRouter = require("./routes/users");

app.use("/users", userRouter);
