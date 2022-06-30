const mongoose  = require("mongoose");

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true//no same username
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        unique:true
    },
    profilePic:{
        type:String,
        default:""
    },
},
{timestamps:true}//automatically create update time etc
);

module.exports = mongoose.model("User", UserSchema);