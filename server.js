const mongoose = require("mongoose");
const express = require("express");
const user = require("./models/User");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const cookieSession = require('cookie-session');
const helmet = require('helmet')
const port = process.env.PORT || 5000;

if (process.env.NODE_ENV !== "production") {
  const dotenv = require("dotenv");
  dotenv.config();
}

// Database
mongoose.connect(
  process.env.DATABASE_LOGIN,
  { useNewUrlParser: true }
);

app.use(helmet());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(cookieSession({
  name: 'btSeshCook',
	secret: process.env.COOKIE_SECRET,
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}));


// API calls
const apiRouter = require("./api.js");
app.use("/api", apiRouter);

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));
  // Handle React routing, return all requests to React app
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}
app.listen(port, () => console.log(`Listening on port ${port}`));
