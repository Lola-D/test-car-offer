const rules = require('../src/rules');

test("firstNameRule function should return false if firstname have leat 3 letters", () => {
  expect(rules.firstNameRule('Christophe')).toBeFalsy();
});

test("firstNameRule function should return rule's name if firstname have less than 3 letters", () => {
  expect(rules.firstNameRule('Ch')).toBe('rule::firstname::length');
  expect(rules.firstNameRule('')).toBe('rule::firstname::length');
  expect(rules.firstNameRule()).toBe('rule::firstname::length');
  expect(rules.firstNameRule(null)).toBe('rule::firstname::length');
});

test("firstNameRule function should return rule's name if firstname is not a string", () => {
  expect(rules.firstNameRule(1258)).toBe('rule::firstname::length');
  expect(rules.firstNameRule([])).toBe('rule::firstname::length');
  expect(rules.firstNameRule({})).toBe('rule::firstname::length');
});