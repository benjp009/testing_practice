const Calculator = require('./calculator.js');

it('a + b = sum of a + b ', () => {
  const calculator = new Calculator();
  expect(calculator.add(2, 4)).toEqual(6);
});

it('a - b = sum of a - b ', () => {
  const calculator = new Calculator();
  expect(calculator.substract(7, 4)).toEqual(3);
});

it('a / b = sum of a / b ', () => {
  const calculator = new Calculator();
  expect(calculator.divide(20, 4)).toEqual(5);
});

it('a * b = sum of a * b ', () => {
  const calculator = new Calculator();
  expect(calculator.multiply(20, 4)).toEqual(80);
});
