const Kadi = require('./lib/kadi')
const card = new Kadi()
const cardNumber = '4242424242424242'
console.log(card.validateCardNumber(cardNumber))
