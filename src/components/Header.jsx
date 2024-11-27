import React from 'react';
import { NoteContext } from '../context';
import { getInitialData } from '../utils/index.js';

export default function Header() {
  const { notes, setNotes } = React.useContext(NoteContext);

  const fieldRef = React.useRef(null);
  return (
    <div className='note-app__header'>
      <h1>Notes</h1>
      <div className='note-search'>
        <input
          ref={fieldRef}
          type='text'
          placeholder='Cari catatan'
          onChange={() => {
            if (fieldRef.current.value == '') {
              return setNotes(getInitialData());
            }
            const searchQuery = fieldRef.current.value.toLowerCase();
            const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(searchQuery) || note.body.toLowerCase().includes(searchQuery));
            setNotes(filteredNotes);
          }}
        />
      </div>
    </div>
  );
}
