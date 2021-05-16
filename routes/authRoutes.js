
const passport = require('passport');


// GOOGLE AUTHENTICATION ROUTE
module.exports = (app) => {
    app.get('/auth/google',
        passport.authenticate('google',{
            scope: ['profile', 'email']
        })
    );

    app.get('/auth/google/callback', 
    passport.authenticate('google', { failureRedirect: '/login' }),
    function(req, res) {
      console.log('Successful authentication, redirect home.');
      res.redirect('/');
    });
  
    

    //FACEBOOK AUTHENTICATION ROUTE
    app.get('/auth/facebook',
        // passport.authenticate('facebook'));
        passport.authenticate('facebook', { authType: 'reauthenticate', scope: ['user_friends'] }));
    app.get('/auth/facebook/callback',
        passport.authenticate('facebook', { failureRedirect: '/login' }),
        function(req, res) {
      // Successful authentication, redirect home.
            res.redirect('/api/current_user');
        }
    );

    //LOGOUT USER
    app.get('/api/logout', (req, res) => {
        req.logout();
        res.send(req.user);
        conlsole.log('logout')
    })

    //GET CURRENT USER DATA
    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
        console.log('req-nicu', req);
        // console.log('res', res);
    })
};
