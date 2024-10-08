const express= require("express");
const Notes= express.Router();

Notes.get("/",(req,res)=>{
    console.log("Successful server message");

    res.status(200).send("This is Notes Success")
})

module.exports={
    Notes
}