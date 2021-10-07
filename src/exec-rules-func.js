const exec = (rulesFunc) => {
  return rulesFunc.filter((rule) => typeof (rule) === 'string')
}

module.exports = exec;