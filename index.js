const express = require("express");

const app = express();

const port = 8000;
const expressLayouts = require("express-ejs-layouts");

app.use(express.static("./assets"));
app.use(expressLayouts);

// extract styled and scripts from sub page into layouts

//app.set("layout extraStyles", true);
//app.set("layout extraScripts", true);
// Use express-roueter// routes
app.use("/", require("./routes"));
app.set("view engine", "ejs");
app.set("views", "./views");
// app.set("views",require(pat))
app.get("/", function (req, res) {
  res.end("Hello");
});

app.listen(port, function (err) {
  if (err) {
    console.log(err, "Error");
    return;
  }
  console.log("Port is up and running", port);
});
