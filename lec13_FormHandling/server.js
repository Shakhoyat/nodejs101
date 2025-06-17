import express from "express";
import path from "path";

const app = express();

app.use(express.static(path.join(process.cwd(), "public")));

app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/form-submit", (req, res) => {
  console.log(req.body);
  res.json({
    message: "Form submitted successfully!",
  });
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
