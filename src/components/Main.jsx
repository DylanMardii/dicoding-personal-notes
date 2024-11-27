import React from 'react';
import Header from './Header';
import Body from './Body';
import { NoteContext } from '../context';
import { getInitialData, showFormattedDate } from '../utils/index.js';

export default function Main() {
  React.useEffect(() => {
    document.title = 'My Personal Notes';
  }, []);

  const [notes, setNotes] = React.useState(getInitialData());

  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      <Header></Header>
      <Body></Body>
    </NoteContext.Provider>
  );
}
