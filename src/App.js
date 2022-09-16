import './App.css';
import React, { useState } from 'react';

function App() {
  const [top, setTop] = useState('');
  const [bottom, setBottom] = useState('');
  const [template, setTemplate] = useState('aag');
  const memeUrl = `https://api.memegen.link/images/${template}/${top}/${bottom}`;

  return (
    <div>
      <h1>Meme Generator</h1>
      <img src={memeUrl} alt="meme" data-test-id="meme-image" />
      <label>
        <br />
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
      <br />
      <br />
      <br />
      <button
        className="btn"
        onClick={() => {
          alert('A download would be nice');
        }}
      >
        Download
      </button>
    </div>
  );
}

export default App;
