const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const keys = require('../config/dev.js');
const mongoose = require('mongoose');

const User = mongoose.model('users');
// console.log('User:', User);



passport.serializeUser((user, done) => {
    console.log('serializeUser',{user});
    done(null, user.id);
})

passport.deserializeUser((id, done) => {
    console.log('deserializeUser', {id: id});
    User.findById(id)
        .then(user => {
            done(null, user);
        });
});

//GOOGLE STRATEGY AUTHENTICATION
passport.use(
    new GoogleStrategy({
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback', 
            proxy: true
        },
        (accessToken, refreshToken, profile, done) => {
            // console.log('GoogleStrategyCallback: profile', profile);

            User.findOne({ googleId: profile.id}).then(existingUser =>{      
                if(existingUser){
                    console.log('existingUser',existingUser);
                    done (null, existingUser);
                }else{
                    new User ({googleId: profile.id})
                    .save()  
                    .then(user => done(null, user));
                    
                }
            })
            
        }
    ));

// console.log('keys.facebookID:', keys.facebookID);
// console.log('keys.facebookID:', keys.facebookSecret);
// console.log('pfofile.id:', profile.id);


//FACEBOOK STRATEGY AUTHENTICATION
passport.use(new FacebookStrategy({
    clientID: keys.facebookID,
    clientSecret: keys.facebookSecret,
    callbackURL: "/auth/facebook/callback",
    proxy: true
  },
    (accessToken, refreshToken, profile, done) => {
        console.log('profileFB:', profile);
        // console.log('User:', User) 

        User.findOne({ facebookId: profile.id}).then(existingUser =>{
            if(existingUser){
                // console.log('existingUser-nicu', existingUser);
                done (null, existingUser);
            }else{
                console.log('insert user', {facebookId: profile.id});
                new User ({facebookId: profile.id})
                    .save()  
                    .then(user => done(null, user));
                    // console.log('user',user);
            }
        })      
    }
));
