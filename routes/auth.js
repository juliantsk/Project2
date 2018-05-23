var authController = require('../controllers/authcontroller.js');


module.exports = function(app, passport) {

    // app.get('/signup', authController.signup);


    // app.get('/signin', authController.signin);


    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/list',
        failureRedirect: '/'
    }));

    app.get('/list', isLoggedIn, authController.list);



    app.get('/logout', authController.logout);


    app.post('/signin', passport.authenticate('local-signin', {
        successRedirect: '/list',
        failureRedirect: '/'
    }));


    function isLoggedIn(req, res, next) {

        if (req.isAuthenticated())

            return next();

        res.redirect('/');

    }

}