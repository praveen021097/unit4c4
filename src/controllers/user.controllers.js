const express= require("express");
const User=require("../models/user.model");
const router= express.Router();

router.post("/user",async (req, res)=>{
    try{
        const user=await (await User.create()).find();
       return  res.status(201).send(user);
    }
    catch(e){
        res.status(500).send({message:"having some problems"})
        console.log(e.message);
    }
});





