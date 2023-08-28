const express = require("express");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const router = express.Router();

router.get("/", (req, res) => {
  res.send("hello from users");
});

module.exports = router;
