const express = require("express");
const { PrismaClient } = require("@prisma/client");
const { checkAuth } = require('./utils')

const prisma = new PrismaClient();
const router = express.Router();

router.get("/me", checkAuth, async (req, res) => {
  const user = await prisma.user.findUnique({
    where: { id: req.userID },
    include: {
      reviews: true,
      comments: true
    }
  })
  res.send(user);
});

module.exports = router;
