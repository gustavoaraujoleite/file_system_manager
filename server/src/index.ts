import express from "express";

const app = express();

const PORT = 8080;

app.get("/", (req, res) => {
  res.send("Succesfull");
});

app.listen(PORT, () => {
  console.log("REST API server ready at: http://localhost:" + PORT);
});
