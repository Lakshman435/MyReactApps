const http = require("http");
const express = require("express");
const fs = require("fs");
const events = require("events");
const zlib = require("zlib");
const os = require("os");
const path = require("path");

http
  .createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("welcome");
  })
  .listen(8084);
console.log("Server running at http://127.0.0.1:8084/");
console.log("zip file");
fs.createReadStream("input.txt")
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream("input.txt.gz"));
console.log("Going to open file!");
fs.open("input.txt", "r+", function(error, data) {
  console.log("inside open fun");
  if (error) {
    return console.error(error);
  }
  console.log("Asynchronous read:  ", data.toString());
  console.log("File opened successfully!");
  fs.unlink("hello.txt", function(error, data) {
    console.log(__filename);
    console.log("file deleted successfully");
  });
  console.log(__dirname);
  // fs.mkdir("test", (error, data) => {
  //   if (error) console.log("error details//", error);
  //   console.log("directory created successfully");
  // });
  function printHello() {
    console.log("hello lakshman");
  }
  //setInterval(printHello, 2000);
  console.log("os type", os.type());
  console.log("platform : " + os.platform());
  console.log("ext name : " + path.extname("fileRW.js"));
});
