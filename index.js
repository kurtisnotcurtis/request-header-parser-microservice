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
  var filterLog = /[\:{2}\w{4}\:]*\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\,/;
  var ip = filterLog.exec(req.headers['x-forwarded-for'])[0];
  ip = ip.substr(0, ip.length - 1);
  
  var response = {
    ipaddress: ip,
    language: req.get("Accept-Language"),
    software: req.get("User-Agent")
  };
  
  res.json(response);
});

app.listen(port);