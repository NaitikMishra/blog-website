const mongoose  = require("mongoose");

const CategorySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    }
},
{timestamps:true}//automatically create update time etc
);

module.exports = mongoose.model("Category", CategorySchema);