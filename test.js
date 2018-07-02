const Kadi = require('./index')
const card = new Kadi()
const cardNumber = '4242424242424242'
const cvc = '123'
const expiryDate = '07/2018'

console.log(card.validateCardNumber(cardNumber))
console.log(card.validateCVC(cvc))
console.log(card.validateExpiryDate(expiryDate))
