
const passport = require('passport')

module.exports = (app) => {
    app.get('/auth/google',
        passport.authenticate('google',{
            scope: ['profile', 'email']
        })
    )
    // console.log('google', passport.authenticate('google'));

    app.get('/auth/google/callback', 
        passport.authenticate('google', { failureRedirect: '/login' }),
        function(req, res) {
            // Successful authentication, redirect home.
            res.redirect('/');
    });

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
        // console.log('req', req.user);
        // console.log('res', res);
    })
    
   
};
