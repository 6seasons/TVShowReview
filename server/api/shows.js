const express = require("express");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const allShows = await prisma.show.findMany();
    res.send(allShows);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const show = await prisma.show.findUnique({
      where: { id: Number(req.params.id) },
    });
    const reviews = await prisma.review.findMany({
      where: { show_id: Number(req.params.id) },
      include: {
        user: {
          select: {
            username: true
        }
      }
    }
    })
    res.send({ show: show, reviews: reviews });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
