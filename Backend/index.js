//import connectTodb from "./config/connectTo_db";




const express = require("express");
const cors = require('cors');
const cookieParser = require("cookie-parser");
const connectTodb = require("./config/connectTodb.js");
const notesController = require("../Backend/controllers/notesControllers");
const usersController = require("../Backend/controllers/usersControllers");
const requireAuth = require("./middleware/requireAuth")



// Create the express app ...
const app = express();

app.use(express.json())
app.use(cookieParser());

app.use(cors({
    origin : true ,
    credentials : true ,
}));

const port =8081;
connectTodb();


app.post("/signup",usersController.signup);
app.post("/login",usersController.login);
app.get("/logout",usersController.logout);
app.get("/check-auth" ,requireAuth, usersController.checkAuth);

// Home ...
app.get('/', (req,res) =>{
    res.json({hello : "world"});
})
// Creating the notes ...
app.post("/notes", notesController.createNote);
// get/fetch all the notes .
app.get('/notes', notesController.fetchNotes);
// get/fetch note by the id .
app.get("/notes/:id", notesController.fetchNote);
// update the note .
app.put("/notes/:id", notesController.updateNote)
// delete the note .
app.delete("/notes/:id", notesController.deleteNote);



app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });