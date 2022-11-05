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
      });
  };
  const handleClickBottom = () => {
    // clear input value
    setBottomMemeText('');
  };
  const handleClickTop = () => {
    // clear input value
    setTopMemeText('');
  };

  useEffect(() => {
    fetch('https://api.memegen.link/templates')
      .then((response) => response.json())
      .then((response) => setTemplates(response))
      .catch(() => alert('No template found.'));
  }, []);

  // First version, but then decided to implement the select function

  /* const handleChange = (event) => {
    setTemplate(event.target.value);
  };*/

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
          onClick={handleClickTop}
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
          onClick={handleClickBottom}
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
        {/* <form>
          <input
            value={template}
            onChange={handleChange}
            onClick={handleClick}

          />
        </form> */}
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
