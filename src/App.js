import './App.css';
import axios from 'axios';
import fileDownload from 'js-file-download';
import { useEffect, useState } from 'react';

function App() {
  const [topMemeText, setTopMemeText] = useState('');
  const [bottomMemeText, setBottomMemeText] = useState('');
  const [template, setTemplate] = useState('aag');
  const [templates, setTemplates] = useState([]);
  const memeUrl = topMemeText
    ? `https://api.memegen.link/images/${template}/${topMemeText}/${bottomMemeText}.jpg`
    : `https://api.memegen.link/images/${template}/_/${bottomMemeText}.jpg`;

  const handleDownload = async () => {
    await axios
      .get(memeUrl, {
        responseType: 'blob',
      })
      .then((res) => {
        fileDownload(res.data, `meme_${template}.jpg`);
        setTopMemeText('');
        setBottomMemeText('');
      });
  };

  useEffect(() => {
    fetch('https://api.memegen.link/templates')
      .then((response) => response.json())
      .then((response) => setTemplates(response))
      .catch(() => alert('No template found.'));
  }, []);

  return (
    <div>
      <h1>Meme Generator</h1>

      <img
        className="imageContainer"
        src={memeUrl}
        alt="meme"
        data-test-id="meme-image"
        height="300px"
        width="350px"
      />

      <label>
        <br />
        Top text
        <br />
        <input
          value={topMemeText}
          onChange={(event) => {
            setTopMemeText(event.currentTarget.value);
          }}
        />
      </label>
      <br />
      <br />

      <label>
        Bottom text
        <br />
        <input
          value={bottomMemeText}
          onChange={(event) => {
            setBottomMemeText(event.currentTarget.value);
          }}
        />
      </label>
      <br />
      <label>
        <br />
        Meme template
        <br />
        <select
          name="templates"
          id="templates"
          className="templateSelector"
          value={template}
          onChange={(event) => setTemplate(event.currentTarget.value)}
        >
          {templates.map((item) => (
            <option key={item.id} value={item.id}>
              {item.id}
            </option>
          ))}
        </select>
      </label>

      <br />
      <br />

      <br />
      <button className="btn" onClick={handleDownload}>
        Download
      </button>
    </div>
  );
}

export default App;
