import { useState } from 'react';

function App() {
  const [names, setNames] = useState([]);

  async function onLoad() {
    const module = await import('./names.js');
    console.log(module);
    setNames(module.default);
  }
  return (
    <>
      <h1>Names</h1>
      <button onClick={onLoad}>Click to get names</button>
      {names.length > 0 && (
        <ul>
          {' '}
          {names.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export default App;
