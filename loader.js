var anyDB = require("any-db");
var db = anyDB.createConnection("sqlite3://database.db");

db.query("CREATE TABLE rooms (name SMALLINT, chats TEXT)").on("end", function() {
     console.log("Created Table ROOMS with 0 Errors");
});
