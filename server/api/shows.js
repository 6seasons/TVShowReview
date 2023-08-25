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
    const allShows = await prisma.show.findUnique({
      where: {
        id: Number(req.params.id),
      },
    });
    res.send(allShows);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
