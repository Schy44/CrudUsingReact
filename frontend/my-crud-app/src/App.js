import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [empId, setEmpId] = useState('');
  const [department, setDepartment] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const result = await axios.get('http://localhost:5000/api/data');
      setData(result.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleAdd = async () => {
    try {
      await axios.post('http://localhost:5000/api/data', { name, emp_id: empId, department });
      fetchData();
      setName('');
      setEmpId('');
      setDepartment('');
    } catch (error) {
      console.error('Error adding data:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/data/${id}`);
      fetchData();
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  return (
    <div>
      <h1>CRUD App</h1>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="Employee ID" value={empId} onChange={(e) => setEmpId(e.target.value)} />
      <input type="text" placeholder="Department" value={department} onChange={(e) => setDepartment(e.target.value)} />
      <button onClick={handleAdd}>Add</button>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.name} - {item.emp_id} - {item.department}
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
