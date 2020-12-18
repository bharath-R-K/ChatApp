const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

const port = 8000;
const expressLayouts = require("express-ejs-layouts");
const db = require("./config/mongoose");

// used for session cookie
const session = require("express-session");
const passport = require("passport");

const passportLocal = require("./config/passport-local-strategy");

const MongoStore = require("connect-mongo")(session);

app.use(express.urlencoded());
app.use(cookieParser());

app.use(express.static("./assets"));
app.use(expressLayouts);

// extract styled and scripts from sub page into layouts

//app.set("layout extraStyles", true);
//app.set("layout extraScripts", true);
// Use express-roueter// routes

// set up the view engine
app.set("view engine", "ejs");
app.set("views", "./views");
// app.set("views",require(path----))
// mongo store is used to store session cookie in the db
app.use(
  session({
    name: "ChatApp",
    // Todo CHANGE the screte before deployments
    secret: "blahasomething",
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 1000 * 60 * 100,
    },

    store: new MongoStore(
      {
        mongooseConnection: db,
        autoremove: "disabled",
      },

      function (err) {
        console.log(err || "connect-mongodb setup ok");
      }
    ),
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);
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
