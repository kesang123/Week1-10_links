import './App.css';

import React, { useState, useEffect } from 'react';

import Happy from './Happy.png';  
import Love from './Love.png';   
import Like from './Like.png'; 
import sad from './sad.png';     

function TextDisplayImage() {
  const [inputText, setInputText] = useState('');  
  const [pic, setPic] = useState(null);  

  
  useEffect(() => {
    if (inputText.toLowerCase() === 'Happy') {
      setPic(Happy);
    } else if (inputText.toLowerCase() === 'Love') {
      setPic(Love);
    } else if (inputText.toLowerCase() === 'Like') {
      setPic(Like);
    } else if (inputText.toLowerCase() === 'sad') {
      setPic(sad);
    } 
  }, [inputText]);  

 
  const handleInputChange = (event) => {
    setInputText(event.target.value);  
  };

  return (
    <div>
      <h2>Enter an emotion (happy, love, like, sad):</h2>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Type 'Happy', 'Love', 'Like', or 'sad'"
      />

      
      {pic ? (
        <div>
          <img src={pic} alt={inputText} style={{ width: '100px', height: '100px' }} />
        </div>
      ) : (
        inputText && <p>No image available for this emotion</p>  
      )}
    </div>
  );
}

export default TextDisplayImage;

