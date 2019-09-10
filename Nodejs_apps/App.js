const http = require("http");
const express = require("express");
const fs = require("fs");
const events = require("events");
const zlib = require("zlib");

http
  .createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("hiiiii\n");
  })
  .listen(8083);
console.log("Server running at http://127.0.0.1:8083/");
//console.log(data.toString());
//const data = fs.readFileSync("input.txt");
// const data = fs.readFile("input.txt", (error, data) => {
//   if (error) console.log(error);
//   console.log(data.toString());
// });

const eventEmitter = new events.EventEmitter();
console.log(eventEmitter);
const listener1 = function() {
  console.log("listener1 executed");
};
const listener2 = function() {
  console.log("listener2 executed");
};
// Bind the connection event with the listner1 function
eventEmitter.addListener("connection", listener1);
eventEmitter.on("connection", listener2);
console.log(eventEmitter);
//fire the connection event
eventEmitter.emit("connection");
// Remove the binding of listner1 function
eventEmitter.removeListener("connection", listener1);
console.log("Listner1 will not listen now.");

// Fire the connection event
eventEmitter.emit("connection");
console.log("//////end////");
// buffer
const buf = new Buffer(256);
const len = buf.write("lakshmanarao");
console.log("octets written", len);
console.log(buf.toString("utf-8", 0, 5));
console.log("****buffer****");
const buf1 = new Buffer("Lakshman");
const json = buf1.toJSON(buf1);
console.log(json);
const buf2 = new Buffer("Rao");
const buf3 = Buffer.concat([buf1, buf2], 256);
console.log("buf3 content and length", buf3.toString());
const buf4 = new Buffer(20);
buf3.copy(buf4);
console.log(
  "buff4 content",
  buf4.length,
  buf4.toString(),
  buf4.slice(0, 9).toString(),
  Buffer.isEncoding(buf2)
);
console.log("****streams****");
let data = "";
let readStream = fs.createReadStream("input.txt");
readStream.setEncoding("UTF-8");
readStream.on("data", chunk => {
  data += chunk;
});

fs.readFile("hello.txt", (error, data) => {
  if (error) console.log(error);
  console.log(data.toString());

  readStream.on("end", function() {
    console.log("streams dataa**", data);
  });
  console.log("**write stream**");
  let data1 = "This is Lakshman";
  let writeStream = fs.createWriteStream("output.txt");

  writeStream.write(data1, "UTF-8");

  writeStream.on("error", function(err) {
    console.log(err.stack);
    const readerStream1 = fs.createReadStream("hello.txt");
    const writerStream1 = fs.createWriteStream("hello1.txt");
    readerStream1.pipe(writerStream1);
    fs.createReadStream("input.txt")
      .pipe(zlib.createGzip())
      .pipe(fs.createWriteStream("input.txt.gz"));
    console.log("Going to open file!");
    fs.open("input.txt", "r+", function(error, data) {
      console.log("inside open fun");
      if (error) {
        return console.error(error);
      }
      console.log("File opened successfully!");
    });

    writeStream.end();
    //handle stream events
    writeStream.on("finish", () => {
      console.log("write completed");
    });
  });
});
