import React from 'react';
import { createRoot } from 'react-dom/client';
import Main from './components/Main';

// import style
import './styles/style.css';

const root = createRoot(document.getElementById('root'));
root.render(<Main></Main>);
