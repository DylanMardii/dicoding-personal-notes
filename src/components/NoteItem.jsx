import React from 'react';
import { NoteContext } from '../context';
import { showFormattedDate } from '../utils/index.js';

export default function NoteItem({ note, index }) {
  const { notes, setNotes } = React.useContext(NoteContext);
  return (
    <div className='note-item'>
      <div className='note-item__content'>
        <h3 className='note-item__title'>{note.title}</h3>
        <p className='note-item__date'>{showFormattedDate(note.createdAt)}</p>
        <p className='note-item__body'>{note.body}</p>
      </div>
      <div className='note-item__action'>
        <button
          className='note-item__delete-button'
          onClick={() => {
            const updatedNotes = notes.filter((n) => n.id !== note.id);
            setNotes(updatedNotes);
          }}
        >
          Delete
        </button>
        <button
          className='note-item__archive-button'
          onClick={() => {
            // Update note by ID.
            const updatedNotes = notes.map((n) => (n.id === note.id ? { ...n, archived: !n.archived } : n));
            setNotes(updatedNotes);
          }}
        >
          {note.archived ? 'Pindahkan' : 'Arsipkan'}
        </button>
      </div>
    </div>
  );
}
