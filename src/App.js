import './App.css';
import React, { useState } from 'react';

function App() {
  const [top, setTop] = useState('');
  const [bottom, setBottom] = useState('');
  const [template, setTemplate] = useState('');
  const memeUrl = `https://api.memegen.link/images/${template}/${top}/${bottom}.jpg`;

  return (
    <div>
      <h1>Meme Generator</h1>
      <label>
        Top text
        <br />
        <input
          value={top}
          onChange={(event) => {
            setTop(event.currentTarget.value);
          }}
        />
      </label>
      <br />
      <br />
      <br />
      <br />
      <label>
        Bottom text
        <br />
        <input
          value={bottom}
          onChange={(event) => {
            setBottom(event.currentTarget.value);
          }}
        />
      </label>
      <br />
      <br />
      <img src={memeUrl} alt="meme" data-test-id="meme-image" />
      <br />

      <label>
        <br />
        Meme template
        <br />
        <input
          value={template}
          onChange={(event) => {
            setTemplate(event.currentTarget.value);
          }}
        />
      </label>
    </div>
  );
}

export default App;
