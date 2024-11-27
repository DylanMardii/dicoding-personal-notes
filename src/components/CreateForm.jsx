import React from 'react';
import { NoteContext } from '../context';

export default function CreateForm() {
  const { notes, setNotes } = React.useContext(NoteContext);

  const [title, setTitle] = React.useState('');
  const titleRef = React.useRef(null);
  const bodyRef = React.useRef(null);

  return (
    <form className='note-input'>
      <h2>Buat Catatan</h2>
      <div className='note-input__title__char-limit'>Sisa karakter: {50 - title.length}</div>
      <input
        ref={titleRef}
        maxLength={50}
        className='note-input__title'
        onChange={() => {
          if (titleRef.current.value.length <= 50) {
            setTitle(titleRef.current.value);
          }
        }}
        placeholder='Ini adalah judul.'
        type='text'
        required
      />
      <textarea ref={bodyRef} className='note-input__body' placeholder='Tuliskan catatan di sini!' required></textarea>
      <button
        onClick={(e) => {
          e.preventDefault();
          if (titleRef.current.value && bodyRef.current.value) {
            setNotes([
              ...notes,
              {
                id: +Date.now(),
                title: titleRef.current.value,
                body: bodyRef.current.value,
                createdAt: new Date(),
                archived: false,
              },
            ]);
            titleRef.current.value = '';
            bodyRef.current.value = '';
          }
        }}
      >
        Buat
      </button>
    </form>
  );
}
