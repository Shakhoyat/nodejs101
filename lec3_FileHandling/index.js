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

writeFileAsync("sample.txt", "Hello, this is a test content!");
