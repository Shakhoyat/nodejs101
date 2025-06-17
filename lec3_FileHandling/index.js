import { readFile, writeFile, appendFile } from "fs/promises";

//Read a file
const readFileAsync = async (filename) => {
  try {
    const data = await readFile(filename, "utf-8");
    console.log("File content:", data);
  } catch (error) {
    console.error("Error reading file:", error);
  }
};

// readFileAsync("sample.txt");

//Write to a file
const writeFileAsync = async (filename, content) => {
  try {
    await writeFile(filename, content, "utf-8");
    console.log("File written/created  successfully");
  } catch (error) {
    console.error("Error writing file:", error);
  }
};

// writeFileAsync("sample.txt", "Hello, this is a test content!");

//append to a file
const appendFileAsync = async (filename, content) => {
  try {
    await appendFile(filename, content, "utf-8");
    console.log("Content appended successfully");
  } catch (error) {
    console.error("Error appending to file:", error);
  }
};

appendFileAsync("sample.txt", "\nThis is appended content!");
readFileAsync("sample.txt");
