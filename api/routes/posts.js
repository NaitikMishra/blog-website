const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");//this will import post model

//create new post
router.post("/",async(req,res)=>{
    const newPost = new Post(req.body);
    try{
        const  savedPost =await newPost.save();
        res.status(200).json(savedPost);
    }catch(err){
        res.status(500).json(err);
    }
});

//update post
router.put("/:id",async(req,res)=>{
    try{
        const post =await Post.findById(req.params.id);
        if(post.username === req.body.username){
        try{
            const updatedPost = await Post.findByIdAndUpdate(req.params.id,{
                $set:req.body
            },{new : true});
            res.status(200).json(updatedPost);
        }catch(err){
            res.status(500).json(err);
        }
    }else{
        res.status(401).json("you can update only your post ");
    }
    }catch(err){
        res.status(500).json(err);
    }
});

//delete post

router.delete("/:id",async(req,res)=>{
    try{
        const post =await Post.findById(req.params.id);
        if(post.username === req.body.username){
        try{
            await post.delete();
            res.status(200).json("post has been deleted....");
        }catch(err){
            res.status(500).json(err);
        }
    }else{
        res.status(401).json("you can delete only your post ");
    }
    }catch(err){
        res.status(500).json(err);
    }
});


//get post 
router.get("/:id",async(req,res)=>{
    try{
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    }catch(err){
        res.status(500).json(err);
    }
});

//get all post
router.get("/",async(req,res)=>{//this post will get post from certains user or certains category like music video etc
    const username = req.query.user;//it will take out the username automatically.
    const catName = req.query.cat;
    try{
        let posts;//we will create a arrays which can change
        if(username){
            posts = await Post.findOneAndDelete({username})
        }
        else if(catName){
            posts = await Post.find({categories:{
                $in:[catName]//this means just find the category name of this and add to posts array
            }})
        }
        else{
            posts =await Post.find();//it will add posts
        }
        res.status(500).json(posts);
    }catch(err){
        res.status(500).json(err);
    }
});

module.exports = router