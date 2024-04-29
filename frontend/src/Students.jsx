// Students.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Students() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8081/')
            .then(res => setStudents(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div className='d-flex vh 100 bg-primary justify-content-center align-items-center'>
            <div className='w-50 bg-white rounded'>
                <button className='btn btn-success'>ADD + </button>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map(student => (
                            <tr key={student.id}>
                                <td>{student.name}</td>
                                <td>{student.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
