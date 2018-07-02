const Kadi = require('./lib/kadi')
const card = new Kadi()
// const cardNumber = '4242424242424242'
// const cvc = undefined
const expiryDate = '11/1999'

// console.log(card.validateCardNumber(cardNumber))
// console.log(card.validateCVC(cvc))
console.log(card.validateExpiryDate(expiryDate))
