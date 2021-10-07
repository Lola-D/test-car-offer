const rules = require('../src/rules');

test("blacklistService should return false if register number is different than AA123AA", () => {
  expect(rules.blacklistService('AA123AB')).toBeFalsy();
});

test("blacklistService should return name's rule if register number is AA123AA", () => {
  expect(rules.blacklistService('AA123AA')).toBe('rule::registernumber::blacklist');
});