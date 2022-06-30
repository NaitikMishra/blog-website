const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postsRoute = require("./routes/posts");
const categoryRoute = require("./routes/category");
const multer = require("multer");

dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI//this is to connect the env file
).then(console.log("connected to mongodb")).catch((err)=>console.log(err));


const storage = multer.diskStorage({//this is for image storage write in the very last 
    destination:(req,file,cb)=>{
        cb(null,"images")
    },
    filename:(req,file,cb)=>{
        cb(null,"myimage.jpg");//file name what you are providing
    },
});
const upload = multer({storage:storage});//to store the image 
app.post("/api/upload",upload.single("file"),(req,res)=>{
    res.status(200).json("file has been uploaded");
});



app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/posts",postsRoute);
app.use("/api/category",categoryRoute);


app.listen("5000",()=>{
    console.log("Backend is running "); 
}); 