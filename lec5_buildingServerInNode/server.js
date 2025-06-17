import http from "http";
const server = http.createServer((req, res) => {
  res.end("you request was received");
});

const port = 3000;

server.listen(port, () => console.log(`Server is running on port ${port}`));
