const express = require("express");

const app = express();

const port = 8000;
// Use express-roueter// routes
app.use("/", require("./routes"));

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
