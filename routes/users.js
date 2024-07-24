const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("User List");
});

router.get("/new", (req, res) => {
  res.send("User Form");
});

router.post("/", (req, res) => {
  res.send("User Created");
});

router
  .route("/:id")
  .get((req, res) => {
    res.send("Get User id: " + req.params.id);
  })
  .put((req, res) => {
    res.send("Update user with id: " + req.params.id);
  })
  .delete((req, res) => {
    res.send("Delete user with id: " + req.params.id);
  });

router.param("id", (req, res, next, id) => {
  console.log("id", id);
  req.params.id = Number(id) + 999;
  next();
});

module.exports = router;
