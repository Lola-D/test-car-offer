const rules = require('../src/rules');

test("quotationRateRule should return false if price is less than +20% of the quotation rate and greater than -20% of the quotation rate", () => {
  expect(rules.quotationRateRule(35000, 40000)).toBeFalsy();
});

test("quotationRateRule should return rule's name if price is greater than +20% of the quotation rate and less than -20% of the quotation rate", () => {
  expect(rules.quotationRateRule(35000, 19000)).toBe('rule::price::quotation_rate');
});

test("quotationRateRule should return rule's name if quotation Rate or price are not numbers", () => {
  expect(rules.quotationRateRule()).toBe('rule::price::quotation_rate');
  expect(rules.quotationRateRule(null, 19000)).toBe('rule::price::quotation_rate');
  expect(rules.quotationRateRule(35000, null)).toBe('rule::price::quotation_rate');
  expect(rules.quotationRateRule('35000', 19000)).toBe('rule::price::quotation_rate');
  expect(rules.quotationRateRule(35000, '19000')).toBe('rule::price::quotation_rate');
  expect(rules.quotationRateRule([], 19000)).toBe('rule::price::quotation_rate');
  expect(rules.quotationRateRule(35000, [])).toBe('rule::price::quotation_rate');
  expect(rules.quotationRateRule({}, 19000)).toBe('rule::price::quotation_rate');
  expect(rules.quotationRateRule(35000, {})).toBe('rule::price::quotation_rate');
});