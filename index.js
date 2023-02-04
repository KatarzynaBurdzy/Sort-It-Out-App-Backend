const express = require("express");
const cors = require("cors");
require("dotenv").config();

const server = express();
server.use(cors());
server.use(express.json);

const PORT = process.env.PORT || 5000;

server.get("/", (req, res) => {
  res.send('Hello world')
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
