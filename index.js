const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/dev.js');
require('./models/User');
require('./services/passport');

// DB  CONNECTION
mongoose.connect(keys.mongoURI, {useNewUrlParser: true,  useCreateIndex: true, useUnifiedTopology: true}, console.log('keys.mongo', keys.mongoURI))

// CHECK DB CONNECTION
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected')
});

const app = express();

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);
    // console.log('keys', keys.cookieKey);\

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes.js')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);