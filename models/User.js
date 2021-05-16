const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

console.log('Schema:');
const userSchema = new Schema ({
    googleId: String,
    facebookId: String
})

mongoose.model("users", userSchema);
// console.log('userSchema,', userSchema);
