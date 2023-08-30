const express = require("express");
const { PrismaClient } = require("@prisma/client");
const { checkAuth } = require('./utils')

const prisma = new PrismaClient();
const router = express.Router();

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
