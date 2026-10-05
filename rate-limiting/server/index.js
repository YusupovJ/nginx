const http = require("http");

const server = new http.Server((req, res) => {
  res.setHeader("Content-Type", "text/plain");
  if (req.method === "GET" && req.url === "/") {
    res.end("Hello world!");
    return;
  }

  res.statusCode = 404;
  res.end("Not Found!");
});

server.listen(7777);
