const { PrismaClient } = require("@prisma/client");
const express = require("express");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require("dotenv").config();

const prisma = new PrismaClient();
const router = express.Router();

router.post('/register', async (req, res) => {
  const { username, password } = req.body;

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    // Store the user in the database
    const user = await prisma.user.create({
      data: {
        username,
        password: hashedPassword,
      },
    });

    res.status(201).send(user);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find the user in the database
    const user = await prisma.user.findUnique({
      where: {username},
    });

    if (!user) {
      return res.status(404).send('User not found');
    }

    // Compare the provided password with the hashed password in the database
    const passwordIsValid = await bcrypt.compare(password, user.password);

    if (!passwordIsValid) {
      return res.status(401).send('Invalid password');
    }

    // Generate a JWT token
    const token = jwt.sign({ id: user.id }, process.env.JWT, { expiresIn: '1h' });

    res.send({ token });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
});

module.exports = router;
