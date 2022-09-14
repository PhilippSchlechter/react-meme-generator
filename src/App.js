import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styles from './App.css';

const background = ['https://api.memegen.link/templates/'];

function App() {
  const [top, setTop] = useState('');
  const [bottom, setBottom] = useState('');
  const [template, setTemplate] = useState('');
  // const [data, setData] = useState(null);

  return (
    <div>
      <h3>Meme Text Input</h3>
      <label>
        Top text
        <br />
        {/* Controlled Component */}
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
        {/* Controlled Component */}
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

      <article className={styles.article}>
        <img className={styles.image} src={background} alt="background" />
        <h1 className={styles.header}>React Is something</h1>
      </article>

      <label>
        <br />
        Meme template
        <br />
        {/* Controlled Component */}
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
