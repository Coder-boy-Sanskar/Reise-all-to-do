import { useEffect, useState } from "react";
import axios from "axios";
import notesStore from "../stores/notesStores";
import NotesPages from "../pages/NotesPages";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import RequireAuth from "./RequireAuth";
import LogoutPage from "../pages/LogoutPage";

function App() {
  const store = notesStore();
  // // States ...
  // const [notes, setNotes] = useState(null);
  // const [createForm, setCreateForm] = useState({
  //   title: "",
  //   body: "",
  // });
  // const [updateNote , setUpdateNote] = useState({
  //   _id : null,
  //   title : "",
  //   body : ""
  // })

  // UseEffect ...
  // useEffect(() => {
  //   store.fetchNotes();
  // }, []);

  // Functions ...
  // const fetchNotes = async () => {
  //   // fetch the notes using axios .
  //   const res = await axios.get("http://localhost:3000/notes");

  //   // set to state .
  //   console.log(res);
  //   setNotes(res.data.notes);
  // };

  // const updateCreateFormField = (e) => {
  //   const {name , value} = e.target;

  //   setCreateForm({
  //     ...createForm,
  //     [name] : value,
  //   })
  // };

  // const createNote = async(e) =>{
  //   e.preventDefault();

  //   // Create the note .
  //   const res = await axios.post("http://localhost:3000/notes",createForm);

  //   // update state .
  //   setNotes([...notes,res.data.note]);

  //   // Clear form state .
  //   setCreateForm({title : "",body : ""});

  // }

  // const deleteNote =async (_id)=>{

  //   // Delte the note .
  //   const res = await axios.delete(`http://localhost:3000/notes/${_id}`);

  //   // Update the state .
  //   const newNotes = [...notes].filter((note) =>{
  //     return note._id !== _id;
  //   })

  //   setNotes(newNotes);

  // }

  // const handleUpdateFieldChange = (e)=>{
  //   const {value , name} = e.target;

  //   setUpdateNote({
  //     ...updateNote,
  //     [name] : value,
  //   });
  // }

  // const toggleUpdate = (note) =>{
  //   // set state on update
  //   setUpdateNote({title : note.title , body : note.body , _id  : note._id});

  // }

  // const updateForm = async (e) =>{
  //   e.preventDefault();
  //   const {title ,body} = updateNote;
  //   // Send the update request .
  //   const res = await axios.put(`http://localhost:3000/notes/${updateNote._id}`,{title , body});
  //   console.log(res);

  //   // Upadate State
  //   const newNotes = [...notes];
  //   const noteIndex = notes.findIndex((note) =>{
  //     return note._id === updateNote._id;
  //   });

  //   newNotes[noteIndex] = res.data.note;
  //   setNotes(newNotes);

  //   // clear update form state .
  //   setUpdateNote({
  //     _id : null,
  //     title : "",
  //     body : "",
  //   })
  // }

  return (
    <div className="App">
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
        <Routes>
          <Route
            index
            element={
              <RequireAuth>
                <NotesPages />
              </RequireAuth>
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/logout" element={<LogoutPage />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
