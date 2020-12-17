const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/chatapp_development");

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error connecting to mongodb"));

db.once("open", function () {
  console.log("connection Success:: MongoDB");
});

module.exports = db;
