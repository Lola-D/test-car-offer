const rules = {
  quotationService: () => {
    return quotationRate = 35000
  },

  firstNameRule: (firstName) => {
    return (
      !firstName
      || typeof (firstName) !== 'string'
      || firstName.length <= 2
    )
      && 'rule::firstname::length';
  },

  lastNameRule: (lastName) => {
    return (
      !lastName
      || typeof (lastName) !== 'string'
      || lastName.length <= 2)
      && 'rule::lastname::length';
  },

  alphaRateRule: (email) => {
    const partToCompare = email.split('@')[0];
    const rate = partToCompare.length * 70 / 100;

    return (!email || partToCompare.match(/[a-z0-9]/g).length <= rate)
      && 'rule::alpha_rate';
  },

  numberRateRule: (email) => {
    const partToCompare = email.split('@')[0];
    const rate = partToCompare.length * 30 / 100;

    return (!email || partToCompare.match(/[0-9]/g) && partToCompare.match(/[0-9]/g).length > rate)
      && 'rule::number_rate';
  },

  quotationRateRule: (quotationRate, price) => {
    const minValue = quotationRate - quotationRate * 20 / 100;
    const maxValue = quotationRate + quotationRate * 20 / 100;

    return (
      !price
      || !quotationRate
      || typeof price !== 'number'
      || typeof quotationRate !== 'number'
      || price < minValue
      || price > maxValue
    )
      && 'rule::price::quotation_rate';
  },

  blacklistService: (registerNumber) => {
    return registerNumber === "AA123AA"
      && 'rule::registernumber::blacklist';
  },

  phoneNumber: (phoneNumber) => {
    if (!phoneNumber) {
      return false
    }
    return phoneNumber.slice(0, 2) === '08'
      && 'rule::phone_number'
  }
};

module.exports = rules;