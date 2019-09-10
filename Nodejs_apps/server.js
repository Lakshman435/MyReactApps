const http = require("http");
const fs = require("fs");
const url = require("url");
const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
app.use(cookieParser());
// app.get("/", (request, response) => {
//   response.send("Hello World");
//   console.log("cookies", request.cookies);
// });
// app.post("/postreq", (request, response) => {
//   console.log("this is post response", request.baseUrl);
//   res.send("Hello POST");
// });
app.get("/:id", (request, response) => {
  fs.readFile(__dirname + "/" + "users.json", "utf-8", (error, data) => {
    const users = JSON.parse(data);
    const user = users["user" + request.params.id];
    console.log(user);
    response.end(JSON.stringify(user));
  });
});
app.get("/listUsers", (request, response) => {
  fs.readFile(__dirname + "/" + "users.json", "utf-8", (error, data) => {
    console.log(data);
    response.end(data);
  });
});

const server = app.listen(8085, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log("server running on", host, port);
});

// http
//   .createServer((request, response) => {
//     const pathname = url.parse(request.url).pathname;
//     console.log("requested for" + pathname + "received");
//     fs.readFile(pathname.substr(1), (error, data) => {
//       if (error) {
//         console.log(error);
//         response.writeHead(404, { "Content-Type": "text/html" });
//       } else {
//         response.writeHead(200, { "Content-Type": "text/html" });
//         response.write(data.toString());
//       }
//       response.end();
//     });
//   })
//   .listen(8085);
// // Console will print the message
// console.log("Server running at http://127.0.0.1:8085/");
