// backend/server.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(cors());

const validCredentials = {
  username: "launchboxxonaptos",
};

app.post("/launchpay", (req, res) => {
  const { username, password } = req.body;
  if (username === validCredentials.username) {
    return res.status(200).json({ message: "Login successful" });
  }
  res.status(401).json({ message: "Invalid username" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
