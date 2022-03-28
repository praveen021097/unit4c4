const mongoose=require("mongoose");

const connect=()=>{
    return mongoose.connect("mongodb+srv://pk_123:pk_123@cluster0.tvxyd.mongodb.net/todo?retryWrites=true&w=majority");
}

module.exports = connect;