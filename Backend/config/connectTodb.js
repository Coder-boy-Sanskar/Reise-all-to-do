const mongoose = require("mongoose");

async function connectTodb() {
    try{
        await mongoose.connect("mongodb+srv://sanskararora10282001:1RBtztsvtGjrpeiW@cluster0.m0l678b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
        console.log("Connected to database");
    }catch(err){
        console.log(err);
    }
}

module.exports = connectTodb;