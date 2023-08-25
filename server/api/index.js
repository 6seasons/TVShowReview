const express = require("express");
const shows = require("./shows");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("hello from api");
});

router.use("/shows", shows);

module.exports = router;
