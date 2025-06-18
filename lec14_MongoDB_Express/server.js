import express from "express";
import mongoose from "mongoose";

const app = express();

mongoose
  .connect(
    "mongodb+srv://shakoyatsujon:3W8IdD5g6kON8AJW@cluster0.0p8evwy.mongodb.net/",
    { dbName: "Nodejs101db" }
  )
  .then(() => {
    console.log("Connected to MongoDB successfully");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.get("/", (req, res) => {
  res.send("Hello, MongoDB101!");
});
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
