const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

fs.open("inputfile.txt", "r", (error, fd) => {
  if (error) throw error;
  console.log(fd.toString());
  console.log("file saved");
  fs.close(fd, error => {
    console.log("file closed");
  });
});

// fs.unlink("inputfile.txt", error => {
//   if (error) throw error;
//   console.log("file deleted successfully!!");
// });

fs.appendFile("inputfile.txt", "welcome", error => {
  if (error) throw error;
  console.log("The data appended to file");
});
// fs.copyFile("inputfile.txt", "inputfile1.txt", error => {
//   if (error) throw error;
//   console.log("source txt copied to destination txt");
// });
fs.exists("inputfile11.txt", exists => {
  if (exists) console.log("My file already exists");
});
fs.readFile("inputfile.txt", (error, data) => {
  if (error) throw error;
  console.log(`inputfile data is ${data}`);
});
console.log(process.env.PATH);
console.log(path.extname("filesystem.js"));
app.listen(8087, () => {
  console.log("server running on :: 8087");
});
