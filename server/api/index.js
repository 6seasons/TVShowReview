const express = require("express");
const shows = require("./shows");
const users = require("./users");
const reviews = require("./reviews");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("hello from api");
});


router.use("/shows", shows);
router.use("/users", users);
router.use("/reviews", reviews);

module.exports = router;
