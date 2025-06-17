import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("you are requested the root URL");
});

app.get("/srs", (req, res) => {
  res.send("Welcome to Statistical Response Suite (SRS)");
});
app.listen(PORT, () => {
  console.log(`Express server is running on port ${PORT}`);
});
