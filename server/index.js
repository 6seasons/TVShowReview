const express = require("express");
const morgan = require("morgan");
const path = require("path");
const api = require("./api");

const app = express();
const PORT = 3000;

app.use(morgan("dev"));

app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

app.use("/api", api);

app.listen(PORT, (error) => {
  if (!error) {
    console.log(`Server is listening on ${PORT}`);
  } else {
    console.log("not working");
  }
});
