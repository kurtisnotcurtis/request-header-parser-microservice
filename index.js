const express = require("express");
const path = require("path");

const port = process.env.PORT || 3000;
const app = express();

app.get("/", function (req, res) { // Serve the homepage
  var fileName = path.join(__dirname, "views", "index.html");
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
  var filterLog = /test/;
  var response = {
    ipaddress: req.headers['x-forwarded-for'],
    language: req.get("Accept-Language"),
    software: req.get("User-Agent")
  };
  console.log(req);
  res.json(response);
});

app.listen(port);