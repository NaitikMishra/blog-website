const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");//this will import post model
const bcrypt = require("bcrypt");

//update   //below :id will put id of the user to the body
router.put("/:id",async(req,res)=>{//for update use put to update but now we need to compare whether you are the owner of this username or not
    if(req.body.userId === req.params.id)//this is to compare, params means parameter
     {
        if(req.body.password){//same as done in auth.js
            const salt =await bcrypt.genSalt(10);
            req.body.password = await bcrypt.hash(req.body.password,salt);
        }
    try{
     const updatedUser = await User.findByIdAndUpdate(req.params.id,{
        $set: req.body,//here we are taking username and password from the body.
     },{new:true});//this is to show data after update 
     res.status(200).json(updatedUser);
    }catch(err){
        res.status(500).json(err);//this will tell smth wrong with mongo or express
    }
}
else{
    res.status(401).json("you can update only your account ");
}
});

//delete
router.delete("/:id",async(req,res)=>{//for update use put to update but now we need to compare whether you are the owner of this username or not
    if(req.body.userId === req.params.id)//this is to compare, params means parameter
     {
        try{//this try is made to delete all his post inner try is same as above 
            const user = await User.findById(req.params.id);
            if(user){
            try{
                await Post.deleteMany({username: user.username})//it will compare post with the username and delete all his post 
                await User.findByIdAndDelete(req.params.id)//after deleteing his account it will contains all his post so we have to delete all his post
                res.status(200).json("user has been deleted...");
               }catch(err){
                   res.status(500).json(err);//this will tell smth wrong with mongo or express
               }
            }
        }catch(err){
            res.status(404).json("user not found ");
        }
}
else{
    res.status(401).json("you can delete only your account ");
}
});

//get user 
router.get("/:id",async(req,res)=>{
    try{
        const user = await User.findById(req.params.id);
        const {password, ...others} = user._doc;
        res.status(200).json(others);
    }catch(err){
        res.status(500).json(err);
    }
});

module.exports = router