// Routes
// Get all data
app.get('/api/data', (req, res) => {
    const sql = 'SELECT * FROM dataa';
    db.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

// Add new data
app.post('/api/data', (req, res) => {
    const { name, emp_id, department } = req.body;
    const sql = 'INSERT INTO dataa (name, emp_id, department) VALUES (?, ?, ?)';
    db.query(sql, [name, emp_id, department], (err, result) => {
        if (err) throw err;
        res.send('Data added successfully');
    });
});

// Update data
app.put('/api/data/:id', (req, res) => {
    const id = req.params.id;
    const { name, emp_id, department } = req.body;
    const sql = 'UPDATE dataa SET name = ?, emp_id = ?, department = ? WHERE id = ?';
    db.query(sql, [name, emp_id, department, id], (err, result) => {
        if (err) throw err;
        res.send('Data updated successfully');
    });
});

// Delete data
app.delete('/api/data/:id', (req, res) => {
    const id = req.params.id;
    const sql = 'DELETE FROM dataa WHERE id = ?';
    db.query(sql, id, (err, result) => {
        if (err) throw err;
        res.send('Data deleted successfully');
    });
});
