const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/gymbro", (req, res) => {
    const gymbros = ["Don't give up on your dreams, or your dreams will give up on you.",
  "A year from now you may have wished to start today.",
  "Once you learn to quit, it becomes a habit.",
  "Exercise is labor withour weariness.",
  "Some people want it to happen, some wish it would happen, others make it happen.",
  ];
  
  let randomIndex = Math.floor(Math.random() * gymbros.length);
  let randomGymbro = gymbros[randomIndex];
  res.status(200).send(randomGymbro);
  
  });

  app.listen(5504, () => console.log("Server running on 5504"));
