const rules = require('../src/rules');

test("lastNameRule function should return false if firstname have leat 3 letters", () => {
  expect(rules.lastNameRule('Dupont')).toBeFalsy();
});

test("lastNameRule function should return rule's name if firstname have less than 3 letters", () => {
  expect(rules.lastNameRule('Du')).toBe('rule::lastname::length');
  expect(rules.lastNameRule('')).toBe('rule::lastname::length');
  expect(rules.lastNameRule()).toBe('rule::lastname::length');
  expect(rules.lastNameRule(null)).toBe('rule::lastname::length');
});

test("lastNameRule function should return rule's name if firstname is not a string", () => {
  expect(rules.lastNameRule(1258)).toBe('rule::lastname::length');
  expect(rules.lastNameRule([])).toBe('rule::lastname::length');
  expect(rules.lastNameRule({})).toBe('rule::lastname::length');
});