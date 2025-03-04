const express = require("express");
const app = express();
const session = require("express-session");
const store = new session.MemoryStore();
const db = require("./db");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const PORT = process.env.PORT || 4001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.use(
  session({
    secret: "f4z4gs$Gcg",
    cookie: { maxAge: 300000000, secure: false },
    saveUninitialized: false,
    resave: false,
    store,
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  db.users.findById(id, function (err, user) {
    if (err) {
      return done(err);
    }
    done(null, user);
  });
});

passport.use(
  new LocalStrategy(function (username, password, cb) {
    db.users.findByUsername(username, function (err, user) {
      if (err) {
        return cb(err);
      }
      if (!user) {
        return cb(null, false);
      }
      if (user.password != password) {
        return cb(null, false);
      }
      return cb(null, user);
    });
  })
);

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/profile", (req, res) => {
  res.render("profile", { user: req.user });
});

app.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/login" }),
  (req, res) => {
    res.redirect("profile");
  }
);

app.get("/register", (req, res) => {
  res.render("register");
});

// POST REGISTER:
app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  // Create new user:
  const newUser = await db.users.createUser({ username, password });
  // Add if/else statement with the new user as the condition:
  if (newUser) {
    // Send correct response if new user is created:
    res.status(201).json({
      msg: "New user created!",
      newUser,
    });
  } else {
    // Send correct response if new user failed to be created:
    res.status(500).json({ msg: "Unable to create user!" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
