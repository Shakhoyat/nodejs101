import express from "express";
import mongoose from "mongoose";
import { userRegister } from "./controllers/user.js";

const app = express();
app.use(express.urlencoded({ extended: true }));

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://shakoyatsujon:3W8IdD5g6kON8AJW@cluster0.0p8evwy.mongodb.net/",
    { dbName: "Nodejs101db" }
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });

app.get("/", (req, res) => {
  res.render("index.ejs");
});

//saving data to database
app.post("/submit", userRegister);
//   console.log("Submitted data:", req.body);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
