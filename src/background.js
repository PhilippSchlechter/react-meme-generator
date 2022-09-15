import React, { useEffect, useState } from 'react';
import App from './App';

const Fetch = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`https://api.memegen.link/templates`)
      .then((r) => r.json())
      .then(setData)
      .catch(() => alert('not found'));
  }, []);

  return <App data={data} />;
};

export default Fetch;
