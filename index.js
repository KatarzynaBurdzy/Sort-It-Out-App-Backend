const express = require("express");

const server = express();

server.use(express.json);

const PORT = 5000;

server.get("/", (req, res) => {
  res.json({ message: "I am a server" });
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
