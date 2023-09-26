const express = require('express');
const path = require('path');
const app = express();

app.use("/images", express.static(path.join(__dirname, "/public/images")));
app.use(express.static(__dirname + '/public'));

module.export = path;
