// __tests__/sum.test.js
const sum = require('../index');

test('Menjumlahkan 1 + 2 untuk menjadi 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('Menjumlahkan -1 + 1 untuk menjadi 0', () => {
  expect(sum(-1, 1)).toBe(0);
});
