import React from "react";
import notesStore from "../stores/notesStores";

function CreateForm() {

    const store = notesStore();

    if(!store.updateNote._id) return <></>;
  return (
    <div>
      <h2>Create a Note</h2>
      <form onSubmit={store.createNote}>
        <input
          onChange={store.updateCreateFormField}
          value={store.createForm.title}
          name="title"
        />
        <textarea
          onChange={store.updateCreateFormField}
          value={store.createForm.body}
          name="body"
        />
        <button type="submit">Create note</button>
      </form>
    </div>
  );
}

export default CreateForm;
