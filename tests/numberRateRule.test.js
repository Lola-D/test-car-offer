const rules = require('../src/rules');

test("numberRateRule function should return false if number of numeric characters is less than 30% of the first email part's length", () => {
  expect(rules.numberRateRule('testdepot@yopmail.fr')).toBeFalsy();
  expect(rules.numberRateRule('testdepot123@yopmail.fr')).toBeFalsy();
});

test("numberRateRule function should return rule's name if number of numeric characters is greater than 30% of the first email part's length", () => {
  expect(rules.numberRateRule('t896987@yopmail.fr')).toBe('rule::number_rate');
});