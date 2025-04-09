require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./db');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/users', require('./routes/users'));

// Export app for testing
module.exports = app;

// Start server only if not in test mode
if (process.env.NODE_ENV !== 'test') {
  const port = process.env.PORT || 5000;
  db.connect((err) => {
    if (err) throw err;
    app.listen(port, () => console.log(`Server running on port ${port}`));
  });
}