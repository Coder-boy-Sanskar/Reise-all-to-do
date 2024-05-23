//import connectTodb from "./config/connectTo_db";




const express = require("express");
const connectTodb = require("./config/connectTodb.js");


// Create the express app ...
const app = express();

const port =8081;
connectTodb();

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });