const http = require("http");

const server = http.createServer((req, res) => {
  console.log("Bir istek gönderildi");

  const url = req.url;
  console.log("url : " + url);
  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Index</h1>");
  } else if (url === "/home") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>home</h1>");
  } else if (url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>about</h1>");
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.write("<h1>error</h1>");
  }
  res.end();
});

const port = 3000;

server.listen(port, () => {
  console.log(`sunucu port : ${port}`);
});
