const express = require("express");
const { PrismaClient } = require("@prisma/client");
const { checkAuth } = require('./utils')

const prisma = new PrismaClient();
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const allusers = await prisma.user.findMany();
    res.send(allusers);
  } catch (err) {
    next(err);
  }
});

router.get("/me", checkAuth, async (req, res) => {
  const user = await prisma.user.findUnique({
    where: { id: req.userID },
    select: {
      username: true,
      email: true,
      image: true,
      reviews: {
        include: {
          show: {
            select: {
              name: true
            }
          }
        }
      },
      comments: true
    }
    })
  res.send(user);
});

module.exports = router;
