const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys.js');
const mongoose = require('mongoose');

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
    done(null, user.id);
    console.log('user.id:', user.id)
})

passport.deserializeUser((id, done) => {
    User.findById(id)
        .then(user => {
            done(null, user);
        });
});

passport.use(
    new GoogleStrategy({
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback'
        },
        (accessToken, refreshToken, profile, done) => {

            User.findOne({ googleId: profile.id}).then(existingUser =>{
                if(existingUser){
                    // console.log('err', err);
                    // console.log('existingUser', existingUser);
                    done (null, existingUser);
                    console.log('existingUser',existingUser);
                }else{
                    new User ({googleId: profile.id})
                        .save()  
                        .then(user => done(null, user));
                        console.log('user',user,googleId);
                }
            })
            
        }
    )
);
