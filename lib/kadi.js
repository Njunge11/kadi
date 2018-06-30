const ValidateCardNumber = require('./validate-card-number')

module.exports = class Kadi {
  validateCardNumber (cardNumber) {
    return new ValidateCardNumber().validateCardNumber(cardNumber)
  }
}
