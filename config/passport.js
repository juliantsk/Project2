var LocalStrategy = require("passport-local").Strategy;
var db = require("../models");
var bcrypt = require("bcrypt-nodejs");

module.exports = function(passport) {

    var generateHash = function(password) {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
    };

    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user, id);
    });


    // used to deserialize the user
    passport.deserializeUser(function(id, done) {
        db.User.findById(id, function(err, user) {
            done(err, user);
        });
    });

    // Local Signup
    passport.use("local-signup", new LocalStrategy({

            usernameField: "email",
            passwordField: "password",
            passReqToCallback: true
        },
        function(req, email, password, done) {

            console.log(email, password);
            process.nextTick(function() {
                db.User.findOne({
                    where: {
                        email: email
                    }
                }).then(function(user) {
                    console.log(user);

                    if (user) {
                        return done(null, false, req.flash("signupMessage", "That email is already taken."));
                    } else {
                        var newUser = {
                            email: email,
                            password: generateHash(password)
                        };
                        // create the user
                        db.User.create(newUser)
                            .then(function(data) {
                                return done(null, newUser);
                            }).catch(function(err) {
                                throw err;
                            });
                    }
                }).catch(function(err) {
                    throw err;
                });
            });
        }));


    // Local login
    passport.use("local-login", new LocalStrategy({
            usernameField: "email",
            passwordField: "password",
            passReqToCallback: true
        },
        function(req, email, password, done) {
            db.User.findOne({ "local.email": email }, function(err, user) {
                if (err) return done(err);

                if (!user) {
                    return done(null, false, req.flash("loginMessage", "No user found."));
                }

                if (!user.validPassword(password)) {
                    return done(null, false, req.flash("loginMessage", "Oops! Wrong pasword."));
                }

                return done(null, user);
            })
        }));

};