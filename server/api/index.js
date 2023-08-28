const express = require("express");
const shows = require("./shows");
const users = require("./users");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("hello from api");
});

router.use("/shows", shows);
router.use("/users", users);

module.exports = router;
