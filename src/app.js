const express = require("express");

const app = express();
app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

app.get("/greet", (req, res) => {
  const name = req.query.name || "World";
  res.json({ message: `Hola, ${name}` });
});

app.post("/echo", (req, res) => {
  res.status(201).json({ data: req.body });
});

module.exports = app;
