import React from 'react';
import CreateForm from './CreateForm';
import CatatanAktif from './CatatanAktif';
import CatatanArsip from './CatatanArsip';

export default function Body() {
  return (
    <div className='note-app__body'>
      <CreateForm></CreateForm>
      <CatatanAktif></CatatanAktif>
      <CatatanArsip></CatatanArsip>
    </div>
  );
}
