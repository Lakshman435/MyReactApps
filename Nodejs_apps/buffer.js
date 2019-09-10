const express = require("express");
const app = express();
debugger;
const buf = Buffer.from(["1", "2", "3"]);
console.log(buf);
for (const b of buf.entries()) {
  console.log(`b val ${b}`);
}
console.count();
const buf2 = Buffer.from("lakshman");
console.log(buf2);
console.log(Buffer.allocUnsafe(10));
console.table([{ a: 1, b: "Y" }, { a: "Z", b: 2 }]);
// const server = app.listen(8086, () => {
//   const host = server.address().address;
//   const port = server.address().port;
//   console.log("server running on", host, port);
//});
