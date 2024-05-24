import {create} from "zustand";
import axios from "axios";

const notesStore = create((set) => ({
  notes: null,
  createForm: {
    title: "",
    body: "",
  },
  updateNote : {
    _id : null,
    title : "",
    body : "",
  },


  fetchNotes: async () => {
    try {
      const response = await axios.get("http://localhost:8081/notes");
  
      // Handlereturn  successful response
      if(response==null){
        console.log("res is null");
        return ;
      }
      set({ notes: response.data.notes }); // Assuming notes are in an array named "notes" within the response
    } catch (error) {
      console.error("Error fetching notes:", error); // Log the error for debugging
  
      // Handle errors appropriately for user feedback:
      // - Display an error message to the user (e.g., "Failed to load notes. Please try again later.")
      // - Set a state variable to indicate an error state (optional)
      // - Optionally, retry the request after a delay (consider exponential backoff)
    }
  },
  





  updateCreateFormField: (e) => {
    const { name, value } = e.target;

    set((state) => {
      return {
        createForm: {
          ...state.createForm,
          [name]: value,
        },
      };
    });
  },

  createNote: async (e) => {
    e.preventDefault();

    const { createForm, notes } = notesStore.getState();

    const res = await axios.post("http://localhost:8081/notes", createForm);

    set({
      notes: [...notes, res.data.note],
      createForm: {
        title: "",
        body: "",
      },
    });
  },

  deleteNote: async (_id) => {
    // Delte the note .
    const res = await axios.delete(`http://localhost:8081/notes/${_id}`);

    const { notes } = notesStore.getState();

    // Update the state .
    const newNotes = notes.filter((note) => {
      return note._id !== _id;
    });
    set({
      notes: newNotes,
    });
  },

  handleUpdateFieldChange : async (e) =>{

    const {value , name} = e.target;

    set((state) =>{
        return{
            updateNote : {
                ...state.updateNote,
                [name] : value,
            }
        }
    })
   },

  toggleUpdate : ({ _id, title , body}) =>{

    // Set state  on update note ..
   console.log("hey");

    set({
        updateNote : {
            title, body , _id  ,
        },
    })
  },

  updateForm : async (e) =>{
    e.preventDefault();

    const {updateNote : {title, body , _id} , notes} = notesStore.getState();
    // Send the update request .
    const res = await axios.put(`http://localhost:8081/notes/${_id}`,{title , body});
    console.log(res);

    // Upadate State
    const newNotes = [...notes];
    const noteIndex = notes.findIndex((note) =>{
      return note._id === _id;
    });

    newNotes[noteIndex] = res.data.note;
    set({
        notes : newNotes,
        updateNote :{
            _id : null ,
            title : "", 
            body : "",
        },
    })
  },
}));

export default notesStore;
