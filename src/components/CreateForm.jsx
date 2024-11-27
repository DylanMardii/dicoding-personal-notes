import React from 'react';
import { NoteContext } from '../context';

export default function CreateForm() {
  const { notes, setNotes } = React.useContext(NoteContext);

  const [remainingLength, setRemainingLength] = React.useState(50);
  const titleRef = React.useRef(null);
  const bodyRef = React.useRef(null);

  return (
    <form className='note-input'>
      <h2>Buat Catatan</h2>
      <div className='note-input__title__char-limit'>Sisa karakter: {remainingLength}</div>
      <input
        ref={titleRef}
        maxLength={50}
        className='note-input__title'
        onChange={() => {
          const remaining = 50 - titleRef.current.value.length;
          setRemainingLength(remaining);
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
            setRemainingLength(50);
          }
        }}
      >
        Buat
      </button>
    </form>
  );
}
