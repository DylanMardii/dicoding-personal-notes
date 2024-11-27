import React from 'react';
import { NoteContext } from '../context';
import NoteItem from './NoteItem.jsx';

export default function CatatanAktif() {
  const { notes } = React.useContext(NoteContext);
  return (
    <>
      <h2>Catatan Aktif</h2>
      {notes.filter((note) => !note.archived).length == 0 ? (
        <div className='notes-list__empty-message'>Tidak ada catatan</div>
      ) : (
        <div className='notes-list'>
          {notes
            .filter((note) => !note.archived)
            .map((note, index) => (
              <NoteItem key={Math.random()} note={note}></NoteItem>
            ))}
        </div>
      )}
    </>
  );
}
