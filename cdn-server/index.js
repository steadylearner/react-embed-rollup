const express = require("express");
const app = express();
const port = 5004;

const _ = require("path").resolve(__dirname, "..");

const favicon = `${_}/src/favicon.ico`;
const CSS = `${_}/dist/main.css`;

const main = `${_}/dist/index.js`; // main.js
const vendors = `${_}/dist/vendors.js`;

const loader = `${_}/cdn-server/loader.js`;

app.get("/favicon", (req, res) => {
  return res.sendFile(favicon);
});

app.get("/main.css", (req, res) => {
  return res.sendFile(CSS);
});

app.get("/loader.js", (req, res) => {
  return res.sendFile(loader);
});

app.get("/vendors.js", (req, res) => {
  return res.sendFile(vendors);
});
app.get("/main.js", (req, res) => {
  return res.sendFile(main);
});

require("path").resolve(__dirname, "..");

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
