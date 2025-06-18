import express from "express";
import mongoose from "mongoose";
import { User } from "./Models/User.js";
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
app.post("/submit", async (req, res) => {
  try {
    let user = await User.create(req.body);
    res.json({
      message: "User Created successfully",
      Newuser: user,
      success: true,
    });
  } catch (error) {
    res.json({
      message: error.message,
      success: false,
    });
  }
  //   console.log("Submitted data:", req.body);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
