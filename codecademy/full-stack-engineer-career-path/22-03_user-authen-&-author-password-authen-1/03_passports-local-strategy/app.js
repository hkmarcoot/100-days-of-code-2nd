const express = require("express");
const app = express();
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const session = require("express-session");
const PORT = process.env.PORT || 5000;

app.use(
  session({
    secret: "secret-key",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Add your passport local strategy below:
passport.use(
  new LocalStrategy(function (username, password, done) {
    db.users.findByUsername(username, (err, user) => {
      // If there's an error in db lookup,
      // return err callback function
      if (err) return done(err);

      // If user not found,
      // return null and false in callback
      if (!user) return done(null, false);

      // If user found, but password not valid,
      // return err and false in callback
      if (user.password != password) return done(null, false);

      // If user found and password valid,
      // return the user object in callback
      return done(null, user);
    });
  })
);

app.get("/", (req, res) => {
  res.send("Hello from the homepage!");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
