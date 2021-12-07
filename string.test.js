const stringLength = require('./string.js');

test('String Length equal to ', () => {
  expect(stringLength('Benjamin')).toBe(8);
});
