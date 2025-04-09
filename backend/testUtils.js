const mysql = require('mysql2/promise');

module.exports = {
  setupTestDB: async () => {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: 'usersdb_test'  // Separate test DB
    });
    await connection.query('DELETE FROM users'); // Clear test data
    return connection;
  }
};