const mongoose=require("mongoose");

const todoSchema=mongoose.Schema(
{
   title:{type:String,required:true},
   createdAt:{type:Date},
   updatedAt:{type:Date} 
},
{
    versionKey:false,
    timeStamps:true,
});

module.exports=mongoose.model("todo",todoSchema);