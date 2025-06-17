import { readFile, writeFile } from "fs/promises";

//Read a file
const readFileAsync = async (filename) => {
  try {
    const data = await readFile(filename, "utf-8");
    console.log("File content:", data);
  } catch (error) {
    console.error("Error reading file:", error);
  }
};

readFileAsync("sample.txt");
