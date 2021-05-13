
// dev.js don't commit this!!!

if(process.env.NODE_ENV === 'production'){
// we are in production - return prod set of keys
module.exports = require('./prod');
}else {
// we are in development - retun the dev keys
module.exports = require('.dev');
}



