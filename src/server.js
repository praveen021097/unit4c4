
const app=require("./index");
const connect=require("../src/configs/db");

app.listen(5000,async function () {
        try{
            await connect();
        console.log("listening port 5000");
        }
        catch(e){
            console.log("error messages :",e)
        }
    })