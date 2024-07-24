const express = require("express");

const app = express();

app.listen(4564);

app.set("view engine", "ejs");

app.use(logger);

app.get("/", (req, res) => {
  res.render("index", { texteue: "Hello World" });
});

const userRouter = require("./routes/users");

function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

app.use("/users", userRouter);
