import React from 'react';
import notesStore from '../stores/notesStores';

function UpdateNote() {
    const store = notesStore();

    if(!store.updateNote._id) return <></>
  return (
    <>
    {store.updateNote._id && <div>
        <h2>Update note</h2>
        <form onSubmit={store.updateForm}>
          <input onChange={store.handleUpdateFieldChange} value={store.updateNote.title} name="title" />
          <textarea onChange={store.handleUpdateFieldChange} value={store.updateNote.body}  name="body" />
          <button type="submit">Update the note </button>
        </form>
      </div>}
      </>
  )
}

export default UpdateNote