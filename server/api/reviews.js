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
          name: true,
          imageUrl: true
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
});

router.post('/create', async (req, res) => {
  const { user_id, show_id, rating, content } = req.body;
  const exists = await prisma.review.findFirst({
    where: {
      user_id,
      show_id: Number(show_id),
    }
  });
  if (!exists) {
    const review = await prisma.review.create({
      data : {
        user_id,
        show_id: Number(show_id),
        rating: Number(rating),
        content
      }
    })
    res.send(review);
  } else {
    res.send(exists);
  }
})

module.exports = router;