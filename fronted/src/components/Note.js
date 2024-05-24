import React from "react";
import notesStore from "../stores/notesStores";

function Note({note}) {

    const store =notesStore((store) =>{
        return {deleteNote : store.deleteNote , toggleUpdate : store.toggleUpdate};
    });


  return (
    <div key={note._id}>
      <h3>{note.title}</h3>
      <button onClick={() => store.deleteNote(note._id)}>Delete Note</button>
      <button onClick={() => store.toggleUpdate(note)}>Upadet the note</button>
    </div>
  );
}

export default Note;
