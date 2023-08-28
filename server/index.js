const express = require("express");
const morgan = require("morgan");
const path = require("path");
const api = require("./api");
const auth = require("./auth");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const app = express();
const PORT = 3000;

app.use(morgan("dev"));
app.use(bodyParser.json());

app.use((req, res, next) => {
  const auth = req.headers.authorization;
  const token = auth?.startsWith("Bearer") ? auth.slice(7) : null;
  try {
    const { id } = jwt.verify(token, process.env.JWT);
    req.userID = id;
  } catch (err) {
    req.userID = null;
  }
  next();
});

app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

app.use("/api", api);
app.use("/auth", auth);

app.listen(PORT, (error) => {
  if (!error) {
    console.log(`Server is listening on ${PORT}`);
  } else {
    console.log("not working");
  }
});
