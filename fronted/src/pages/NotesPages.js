import React,{useEffect} from "react";
import notesStore from "../stores/notesStores";
import Notes from "../components/Notes";
import UpdateNote from "../components/UpdateNote";
import CreateForm from "../components/CreateForm";

function NotesPages() {
  const store = notesStore();
  // UseEffect ...
  useEffect(() => {
    store.fetchNotes();
  }, []);

  return (
    <div>
      {/* fetch all the notes  */}
      <Notes />
      {/* Update the note */}
      <UpdateNote />
      {/* Create a note */}
      <CreateForm />
    </div>
  );
}

export default NotesPages;
