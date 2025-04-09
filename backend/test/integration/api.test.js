const { expect } = require('chai');
const request = require('supertest');
const app = require('../../app');
const { setupTestDB } = require('../../testUtils');

describe('API Tests', () => {
  let testDb;

  before(async () => {
    testDb = await setupTestDB(); // Initialize test DB
  });

  after(async () => {
    await testDb.end(); // Cleanup
  });

  it('GET /api/users should return 200', async () => {
    const res = await request(app).get('/api/users');
    expect(res.status).to.equal(200);
  });
});