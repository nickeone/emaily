
const passport = require('passport')

module.exports = (app) => {
    app.get('/auth/google',
        passport.authenticate('google',{
            scope: ['profile', 'email']
        })
    )
    // console.log('google', passport.authenticate('google'));

    app.get('/auth/google/callback', 
        passport.authenticate('google')
        // , { failureRedirect: '/login' }),
        // function(req, res) {
        //     // Successful authentication, redirect home.
        //     res.redirect('/');
        // }
    );

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.send(req.user);
        // console.log('req', req)
    })

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
        // res.send(req.session);
        // console.log('req', req.session);
        // console.log('res', res);
    })
};
