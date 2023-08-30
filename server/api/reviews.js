const express = require("express");
const { PrismaClient } = require("@prisma/client");
const { checkAuth } = require('./utils')

const prisma = new PrismaClient();
const router = express.Router();

router.get("/", (req, res) => {
  res.send('hello from reviews');
})

module.exports = router;