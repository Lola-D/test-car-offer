const rules = require('../src/rules');

test("alphaRateRule function should return false if number of alpha numeric characters is greater than special characters into the first email's part", () => {
  expect(rules.alphaRateRule('testdepot@yopmail.fr')).toBeFalsy();
  expect(rules.alphaRateRule('testdepot@yopmail.fr')).toBeFalsy();
  expect(rules.alphaRateRule('test-depot@yopmail.fr')).toBeFalsy();
});

test.each([
  ['testdepot@yopmail.fr', false],
  ['one...name@yopmail.fr', 'rule::alpha_rate'],
  ['t-e-s-t@yopmail.fr', 'rule::alpha_rate']
])("alphaRateRule function should return rule's name if number of alpha numeric characters is less than special characters into the first email's part", (a, expected) => {
  expect(rules.alphaRateRule(a)).toBe(expected);
});