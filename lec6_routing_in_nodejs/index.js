// console.log("Routing in Node.js");
import http from "http";

const server = http.createServer((req, res) => {
  let responseContent = "";

  if (req.url === "/srs") {
    responseContent = "welcome to Statistical Response Suite (SRS)";
  } else if (req.url === "/srs/feedback") {
    responseContent = "Welcome to SRS Feedback Page";
  } else if (req.url === "/srs/contact") {
    responseContent = "Welcome to SRS Contact Page";
  } else {
    responseContent = `<h1>Welcome to Node.js Routing</h1>
         <p>This is a simple server handling routing.</p>
         <p>Current URL: ${req.url}</p>`;
  }

  res.end(responseContent);
});
const port = 3000;

server.listen(port, () => console.log(`Server is running on port ${port}`));
console.log("Routing in Node.js");
