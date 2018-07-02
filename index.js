const Kadi = require('./lib/kadi')
const card = new Kadi()
const cardNumber = '4242424242424242'
const expiryDate = '07/2018'
const cvc = undefined
console.log(card.validateCardNumber(cardNumber))
console.log(card.validateExpiryDate(expiryDate))
console.log(card.validateCVC(cvc))
