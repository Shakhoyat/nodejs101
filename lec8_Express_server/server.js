import express from "express";

const app = express();
const PORT = 2000;
app.listen(PORT, () => {
  console.log(`Express server is running on port ${PORT}`);
});
