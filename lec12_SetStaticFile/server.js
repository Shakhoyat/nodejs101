import express from "express";
import path from "path";

const app = express();

app.use(express.static(path.join(process.cwd(), "public")));

app.get("/", (req, res) => {
  res.render("index.ejs");
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
