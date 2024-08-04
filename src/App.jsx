// src/App.jsx
import './App.css';

const App = () => {
  const items = [
    { name: 'x', watched: true },
    { name: 'y', watched: false },
    { name: 'z', watched: true },
  ];

  return (
    <>
      <h1>Shopping List</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index} >
            {item.watched ? item.name+'✅✅✅✅✅' :item.name+'❌❌❌❌❌'}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;