import React from 'react'
import notesStore from '../stores/notesStores'
import Note from './Note';

function Notes() {
    const store = notesStore();

  return (
    <div>
        <h2>Notes : </h2>
        {store.notes &&
          store.notes.map((note) => {
            return (
              <Note note = {note} key={note._id}/>
            );
          })}
      </div>
  )
}

export default Notes