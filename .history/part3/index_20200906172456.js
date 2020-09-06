const http = require("http");
const { type } = require("os");
const app = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/plain",
  });
  res.end("hello world");
});
