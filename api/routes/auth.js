const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");//this is done to hide password in the database 

//register
//so to delete use delete, to create post , to update put and if we are not changing anything we are using get 
router.post("/register",async(req,res)=>{
    try{
        const salt = await bcrypt.genSalt(10);//this is related to bcrypt
        const hashedPass = await bcrypt.hash(req.body.password,salt);//above same
        const newUser = new User({ //if we write req.body it will take all from the user 
            username: req.body.username,
            email: req.body.email,
            password:hashedPass,//earlier  req.body.password but now diff. bs to hide your password in database
        })
        const user = await newUser.save();
        res.status(200).json(user);

    }catch(err){
        res.status(500).json(err);//this will tell smth wrong with mongo or express
    }
});

//login
router.post("/login", async(req,res)=>{
    try{
        const user = await User.findOne({username: req.body.username})//by this we will find the required user from mongo db.
        !user && res.status(400).json("Wrond credentials ");

        const  validated = await bcrypt.compare(req.body.password,user.password)//here we match the hash password with the password entered by user 
        !validated && res.status(400).json("Wrond credentials ");

        const {password, ...others} = user._doc;//we dont want to send password to the user thats it is written 
        res.status(200).json(others);//here if user direct written then all thing will be shown if other then all thing except password
    }catch(err){
        res.status(500).json(err);
    }
});

module.exports = router