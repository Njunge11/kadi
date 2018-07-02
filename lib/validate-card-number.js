/**
 * Kadi
 * Copyright(c) 2018 Njunge Njenga
 * MIT Licensed
 */

'use strict'

const cardDetails = require('./card-details')

module.exports = class ValidateCardNumber {
  validate (cardNumber) {
    const regexCheckResult = this.regexCheck(cardNumber)
    const checksumCheckResult = this.checksumCheck(cardNumber)
    return regexCheckResult.valid && checksumCheckResult ? regexCheckResult : { valid: false }
  }

  regexCheck (cardNumber) {
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

  checksumCheck (cardNumber) {
    const reversedCardNumber = this.reverseCardNumber(cardNumber)
    let digit
    let digits = []
    Object.keys(reversedCardNumber).map((number) => {
      digit = reversedCardNumber[number]
      // Multiply the value of every 2nd digit in the number by 2
      if (number % 2 === 1) {
        digit *= 2
        // If the value of the multiplied digit is > 9, summate the numerals that compose the digit
        digit = digit > 9 ? this.summateNumerals(digit) : digit
      }
      digits.push(digit)
    })
    const formatedDigits = this.formatDigits(digits)
    const sum = this.summateNumerals(formatedDigits)
    return sum % 10 === 0
  }

  reverseCardNumber (cardNumber) {
    cardNumber = cardNumber + ''
    return cardNumber.split('').reverse().join('')
  }

  summateNumerals (digit) {
    const sum = digit.toString().split('').map(Number).reduce((a, b) => {
      return a + b
    }, 0)
    return sum
  }

  formatDigits (digits) {
    let cardNumber = ''
    digits.map((digit) => {
      cardNumber += digit
    })
    return this.reverseCardNumber(cardNumber)
  }
}
