import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';

import EmojiCounter from './EmojiCounter';
import TextDisplayImage from './TextDisplayImage';
import UpdateCounter from './counter';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <EmojiCounter pic='Happy' />
  <EmojiCounter pic='Love' />
  <EmojiCounter pic='Like' />
  <EmojiCounter pic='sad' />
  <UpdateCounter/>
  <TextDisplayImage/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();