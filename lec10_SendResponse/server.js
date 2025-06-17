import express from "express";
import path from "path";
const app = express();
const products = [
  { id: 1, name: "iphonw 16", price: 100 },
  { id: 2, name: "google pixel", price: 200 },
  { id: 3, name: "samsung galaxy", price: 300 },
];
//send json response

// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to the Product API", products });
// });

//send html response
//  app.get("/html", (req, res) => {
//   res.send(`
//     <h1>Welcome to the Product API</h1>
//     <ul>
//       ${products
//         .map((product) => `<li>${product.name} - $${product.price}</li>`)
//         .join("")}
//     </ul>
//   `);
// });

//send html file response

const dir = path.resolve();
console.log("my path = ", dir);

app.get("/", (req, res) => {
  res.sendFile(path.join(dir, "index.html"));
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
