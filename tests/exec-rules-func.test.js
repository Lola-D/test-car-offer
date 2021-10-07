const exec = require('../src/exec-rules-func');

const rules = {
  ruleOne: () => 'ruleOne',
  ruleTwo: () => false,
  ruleThree: () => false,
  ruleFour: () => 'ruleFour',
  ruleFive: () => 'ruleFive',
};

test("exec function should return an array with rules if rules's result is type of string", () => {
  const expected = ['ruleOne', 'ruleFour', 'ruleFive'];
  expect(exec(
    [
      rules.ruleOne(),
      rules.ruleTwo(),
      rules.ruleThree(),
      rules.ruleFour(),
      rules.ruleFive()
    ]
  )).toEqual(expect.arrayContaining(expected));
});

