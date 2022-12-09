// const express = require('express')
// const app = express()

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

// app.listen(3000)

import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("<h1>Index</h1>");
});
app.get("/home", (req, res) => {
  res.status(200).send("<h1>Home</h1>");
});
app.get("/about", (req, res) => {
  res.status(200).send("<h1>About</h1>");
});
app.get("/contact", (req, res) => {
  res.status(200).send("<h1>Contact</h1>");
});
app.get("*", (req, res) => {
  res.status(200).send("<h1>Error 404</h1>");
});

const port = 3000;
app.listen(port, () => {
  console.log(`sunucu port : ${port}`);
});

// import express from "express";
// import path from "path";
// import { fileURLToPath } from "url";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const app = express();
// app.use(express.static("public"));

// app.get("/", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "temp/index.html"));
// });

// const port = 3000;
// app.listen(port, () => {
//   console.log(`server is started at ${port}`);
// });
