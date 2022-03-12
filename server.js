"use strict";

/**
 * Dependencies
 * @ignore
 */
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const Webauthn = require("webauthn");
var cors = require("cors");

/**
 * Module Dependencies
 * @ignore
 */
const LevelAdapter = require("webauthn/src/LevelAdapter");

/**
 * Example
 * @ignore
 */
const app = express();

// Session
app.use(
  session({
    secret: "keyboard cat",
    saveUninitialized: true,
    resave: false,
    cookie: {
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
    },
  })
);

// Static
app.use(express.static(path.join(__dirname, "build")));

// Body parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Create webauthn
const webauthn = new Webauthn({
  origin: 'https://tranquil-reaches-89447.herokuapp.com',
  usernameField: "username",
  userFields: {
    username: "username",
    name: "displayName",
  },
  store: new LevelAdapter("db"),
  // OR
  // store: {
  //   put: async (id, value) => {/* return <void> */},
  //   get: async (id) => {/* return User */},
  //   search: async (search) => {/* return { [username]: User } */},
  //   delete: async (id) => {/* return boolean */},
  // },
  rpName: "Stranger Labs, Inc.",
});

// var whitelist = ["http://localhost:3000", "http://localhost:3001"]; //white list consumers
// var corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(null, false);
//     }
//   },
//   methods: ["GET", "PUT", "POST", "DELETE", "OPTIONS"],
//   optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
//   credentials: true, //Credentials are cookies, authorization headers or TLS client certificates.
//   allowedHeaders: [
//     "Content-Type",
//     "Authorization",
//     "X-Requested-With",
//     "device-remember-token",
//     "Access-Control-Allow-Origin",
//     "Origin",
//     "Accept",
//   ],
// };

// app.use(cors(corsOptions));

// Mount webauthn endpoints
app.use("/webauthn", webauthn.initialize());

// Endpoint without passport
app.get("/secret", webauthn.authenticate(), (req, res) => {
  res.status(200).json({
    status: "ok",
    message: `Super secret message for ${req.user.displayName}`,
  });
});

// Debug
app.get("/db", async (req, res) => {
  res.status(200).json(await webauthn.store.search());
});

// Debug
app.get("/session", (req, res) => {
  res.status(200).json(req.session);
});

// Serve React App
app.use("*", (req, res) => {
  return res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Listen
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Listening on port", port);
});