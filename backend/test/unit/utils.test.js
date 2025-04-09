const { expect } = require('chai');

describe('Utility Functions', () => {
  describe('validateEmail()', () => {
    it('should accept valid emails', () => {
      expect(validateEmail('test@example.com')).to.be.true;
    });

    it('should reject invalid emails', () => {
      expect(validateEmail('invalid')).to.be.false;
    });
  });
});

// Example utility function
function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}