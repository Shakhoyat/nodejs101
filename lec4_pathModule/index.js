// console.log("path Module");

import path from "path";

// Join paths

const joinedPath = path.join("/path", "index.py", "file.java");
// console.log("Joined Path=======", joinedPath);

//absolute path
const absolutePath = path.resolve();
console.log("We are currently working on =======", absolutePath);
// console.log("Current Directory========", process.cwd());
