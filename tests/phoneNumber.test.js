const rules = require('../src/rules');

test.each([
  ['0801050203', 'rule::phone_number'],
  ['0602010203', false],
  [null, false]
])('phone number has to be free', (a, expected) => {
  expect(rules.phoneNumber(a)).toBe(expected);
});