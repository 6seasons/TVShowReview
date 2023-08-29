const { PrismaClient } = require("@prisma/client");
const express = require("express");
const jwt = require('jsonwebtoken')
require("dotenv").config();

const prisma = new PrismaClient();
const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    const user = await prisma.user.findUnique({
      where: { username: req.body.username },
    });
    if (user.password === req.body.password) {
      const token = jwt.sign({ id: user.id }, process.env.JWT);
      res.send(token);
    } else {
      res.send("something went wrong");
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
