const exec = require('./src/exec-rules-func');
const offer = require('./src/offer');
const rules = require('./src/rules');

const isScam = exec(
  [
    rules.quotationService(),
    rules.firstNameRule(offer.contact.firstName),
    rules.lastNameRule(offer.contact.lastName),
    rules.alphaRateRule(offer.contact.email),
    rules.numberRateRule(offer.contact.email),
    rules.blacklistService(offer.vehicule.registerNumber),
    rules.quotationRateRule(quotationRate, offer.price),
    rules.phoneNumber(offer.contact.phone1.value)
  ]
);

const checkIfIsScam = (isScam) => {
  const result = {
    "reference": offer.reference,
    "scam": isScam.length > 0,
    "rules": isScam
  };

  return result;
};

console.log(checkIfIsScam(isScam));

module.exports = checkIfIsScam;