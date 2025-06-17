import express from "express";

const app = express();
let iphones = [
  { title: "iPhone 14", price: 999, image: "https://example.com/iphone14.jpg" },
  {
    title: "iPhone 14 Pro",
    price: 1099,
    image: "https://example.com/iphone14pro.jpg",
  },
  {
    title: "iPhone 14 Pro Max",
    price: 1199,
    image: "https://example.com/iphone14promax.jpg",
  },
  {
    title: "iPhone SE",
    price: 429,
    image: "https://example.com/iphonese.jpg",
  },
];
app.get("/", (req, res) => {
  let name = "John Doe";
  res.render("index.ejs", { name, iphones });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
