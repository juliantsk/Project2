var exports = module.exports = {}

exports.signup = function(req, res) {

    res.render('signup');

}

exports.signin = function(req, res) {

    res.render('signin');

}

exports.list = function(req, res) {

    res.render('list');

}

exports.logout = function(req, res) {

    req.session.destroy(function(err) {

        res.redirect('/');

    });

}