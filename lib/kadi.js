const cardDetails = require('./card-details')

module.exports = class Kadi {
  validateCardNumber (cardNumber) {
    let result
    Object.keys(cardDetails).map((vendor) => {
      const regex = cardDetails[vendor].regex
      const valid = regex.test(cardNumber)
      if (valid) {
        result = { valid: valid, vendor: vendor, cardType: cardDetails[vendor].cardType }
      }
    })

    return result || {valid: false}
  }
}
