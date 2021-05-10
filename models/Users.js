const mongoose = require('mongoose');
const Schema = mongoose.Schema; 
// console.log('Schema:', Schema);

const userSchema = new Schema ({
    googleId: String,

})

mongoose.model("users", userSchema);
// console.log('userSchema,', userSchema);f

