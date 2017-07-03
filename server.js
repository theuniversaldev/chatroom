var express = require("express");
var anyDB = require("any-db");
var path = require("path");
var app = express();

var db = anyDB.createConnection("sqlite3://database.db");
app.use(express.static(__dirname + "/public"));

app.get("/", function(req, res) {
});

app.listen(8880);
