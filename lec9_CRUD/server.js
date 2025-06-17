// console.log("CRUD Operation here");
import express from "express";
const app = express();

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Express server is running on port ${PORT}`);
});
//C= create => POST (method)
app.post("/srs", (req, res) => {
  res.send("Welcome to Statistical Response Suite (SRS)");
});
//R= read => GET (method)
app.get("/", (req, res) => {
  res.send("you are requested the root URL");
});
//U= update => PUT (method)
app.put("/srs", (req, res) => {
  res.send("Update operation in SRS");
});
//D= delete => DELETE (method)
app.delete("/srs", (req, res) => {
  res.send("Delete operation in SRS");
});
