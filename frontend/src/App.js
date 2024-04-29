import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const [newItem, setNewItem] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const result = await axios.get('/api/data');
    setData(result.data);
  };

  const handleAdd = async () => {
    await axios.post('/api/data', { item: newItem });
    fetchData();
    setNewItem('');
  };

  const handleDelete = async (id) => {
    await axios.delete(`/api/data/${id}`);
    fetchData();
  };

  return (
    <div>
      <h1>CRUD App</h1>
      <input type="text" value={newItem} onChange={(e) => setNewItem(e.target.value)} />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.item}
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
