const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all users
router.get('/', (req, res, next) => {
    db.connection.query('SELECT * FROM users', (err, results) => {
        if (err) {
            return next(err);
        }
        res.json(results);
    });
});

// Add new user
router.post('/', (req, res, next) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required' });
    }
    
    db.connection.query(
        'INSERT INTO users (name, email) VALUES (?, ?)',
        [name, email],
        (err, results) => {
            if (err) {
                return next(err);
            }
            res.status(201).json({ id: results.insertId, name, email });
        }
    );
});

// Update user
router.put('/:id', (req, res, next) => {
    const { id } = req.params;
    const { name, email } = req.body;
    
    if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required' });
    }
    
    db.connection.query(
        'UPDATE users SET name = ?, email = ? WHERE id = ?',
        [name, email, id],
        (err, results) => {
            if (err) {
                return next(err);
            }
            if (results.affectedRows === 0) {
                return res.status(404).json({ error: 'User not found' });
            }
            res.json({ id, name, email });
        }
    );
});

// Delete user
router.delete('/:id', (req, res, next) => {
    const { id } = req.params;
    
    db.connection.query(
        'DELETE FROM users WHERE id = ?',
        [id],
        (err, results) => {
            if (err) {
                return next(err);
            }
            if (results.affectedRows === 0) {
                return res.status(404).json({ error: 'User not found' });
            }
            res.status(204).end();
        }
    );
});

module.exports = router;