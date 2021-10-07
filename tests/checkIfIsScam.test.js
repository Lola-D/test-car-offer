const checkIfIsScam = require('../index');
const exec = require('../src/exec-rules-func');

const rules = {
  ruleOne: () => 'ruleOne',
  ruleTwo: () => false,
  ruleThree: () => false,
  ruleFour: () => 'ruleFour',
  ruleFive: () => 'ruleFive',
};

const isScam = exec(
  [
    rules.ruleOne(),
    rules.ruleTwo(),
    rules.ruleThree(),
    rules.ruleFour(),
    rules.ruleFive()
  ]
);

test('checkIfIsScam function should return an object', () => {
  const expected = {
    "reference": "B300053623",
    "scam": true,
    "rules": ['ruleOne', 'ruleFour', 'ruleFive']
  };
  expect(checkIfIsScam(isScam)).toEqual(expect.objectContaining(expected));
});