const express = require("express");
const path = require("path");

const app = express();

app.get("/", function (req, res) { // Serve the homepage
  var fileName = path.join("views", "index.html");
  res.sendFile(fileName, function (err) {
    if (err) {
      console.log(err);
      res.status(err.status).end();
    } else {
      console.log("View sent:", fileName)
    }
  });
});

app.get("/api/whoami", function (req, res) {
  res.end();
});