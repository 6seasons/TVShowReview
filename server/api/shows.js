const express = require("express");
const { PrismaClient } = require("@prisma/client");
const {checkAuth} = require('../api/utils')

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
    });
    const aggregations = await prisma.review.aggregate({
      _avg: {
        rating: true,
      },
      where: { show_id: Number(req.params.id) },
      
    })
    res.send({ show: show, reviews: reviews, aggregations: aggregations });
  } catch (err) {
    console.log(err);
  }
});

router.post(`/create`, async (req, res) => {
  const { name, imageUrl, details } = req.body
  const result = await prisma.show.create({
    data: {
      name,
      imageUrl,
      details,
    },
  })
  res.json(result)
})

router.put(`/EditShowPage/Edit/:id`, async (req, res) => {
  const { name, imageUrl, details } = req.body
  const result = await prisma.show.update({
    where: {id: Number(req.params.id)},
    data: {
      name,
      imageUrl,
      details,
    },
  })
  res.json(result)
})


router.delete('/delete', async (req, res) => {
  const {id} = req.body
  const result = await prisma.show.delete({
    where: {id: Number(id)}
  })
  res.json(result)
})

module.exports = router;
