const express = require("express");
const { PrismaClient } = require("@prisma/client");
const { checkAuth } = require('./utils')

const prisma = new PrismaClient();
const router = express.Router();

router.get("/", (req, res) => {
  res.send('hello from reviews');
})

router.get("/:id", async (req, res) => {
  const id = Number(req.params.id)
  const review = await prisma.review.findUnique({
    where: { id: id },
    include: {
      show: {
        select: {
          name: true
        }
      },
      user: {
        select: {
          username: true,
          image: true
      }
    },
    comments: {
      include: {
        user: {
          select: {
            username: true,
            image: true
          }
        }
      }
    }
  }
  });
  res.send(review);
})

// user pic/ show pic / rating / review / comments

module.exports = router;