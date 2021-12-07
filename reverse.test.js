const reverseString = require('./reverse.js');

test('String is reversed', () => {
  expect(reverseString('Benjamin')).toBe('nimajneB');
});
