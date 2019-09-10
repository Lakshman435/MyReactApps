const express = require("express");
const events = require("events");

const app = express();
const server = app.listen(8086, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log("server running on", host, port);
});

const eventEmitter = new events.EventEmitter();
eventEmitter.once("event", () => {
  console.log("event Ocurred");
});
// eventEmitter.on("event", () => {
//   console.log("event happened");
// });
const callback = () => {
  console.log("foo event happened");
};
eventEmitter.on("foo", callback);
console.log(eventEmitter.eventNames());
eventEmitter.listenerCount("event");
eventEmitter.listeners("event");
console.log("emit func called");
eventEmitter.emit("event");
eventEmitter.emit("foo");
eventEmitter.removeListener("foo", callback);
console.log(eventEmitter.eventNames());
