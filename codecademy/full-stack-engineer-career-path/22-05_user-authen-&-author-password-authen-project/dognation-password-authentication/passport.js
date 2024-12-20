const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const helper = require("../helpers/helper");

// Set up the Passport strategy:
passport.use(
  new LocalStrategy(function (username, password, done) {
    helper.findByUsername(username, async (err, user) => {
      // If there's an error in db lookup,
      // return err callback function
      if (err) return done(err);

      // If user not found,
      // return null and false in callback
      if (!user) return done(null, false);

      // If user found, but password not valid,
      // return err and false in callback
      // if (user.password != password) return done(null, false);
      const matchedPassword = await bcrypt.compare(password, user.password);

      if (!matchedPassword) {
        return done(null, false);
      }

      // If user found and password valid,
      // return the user object in callback
      return done(null, user);
    });
  })
);

// Serialize a user
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Deserialize a user
passport.deserializeUser((id, done) => {
  helper.findById(id, function (err, user) {
    if (err) return done(err);
    done(null, user);
  });
});
