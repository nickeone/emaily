
// dev.js don't commit this!!!

if(process.env.NODE_ENV === 'production'){
    // console.log('rocess.env.NODE_ENV:', process.env.NODE_ENV);
// we are in production - return prod set of keys
module.exports = require('./prod');
}else {
// we are in development - retun the dev keys
console.log('config/keys.js/else:');
module.exports = require('./dev');
}



