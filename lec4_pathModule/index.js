// console.log("path Module");

import path from "path";

// Join paths

const joinedPath = path.join("/path", "index.py", "file.java");
// console.log("Joined Path=======", joinedPath);

//absolute path
const absolutePath = path.resolve();
// console.log("We are currently working on =======", absolutePath);
// console.log("Current Directory========", process.cwd());

//extension of a file
const fileExtension = path.extname("resume.pdf");
// console.log("File Extension=========", fileExtension);
if (fileExtension === ".pdf") {
  console.log("This is a PDF file");
} else {
  console.log("This is not supported file");
}
