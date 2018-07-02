/**
 * Kadi
 * Copyright(c) 2018 Njunge Njenga
 * MIT Licensed
 * TO-DO - add input field formatting and SVG's
 */

'use strict'

const ValidateCardNumber = require('./validate-card-number')
const ValidateExpiryDate = require('./validate-expiry-date')
const ValidateCVC = require('./validate-cvc')

module.exports = class Kadi {
  validateCardNumber (cardNumber) {
    return new ValidateCardNumber().validate(cardNumber)
  }

  validateExpiryDate (date) {
    return new ValidateExpiryDate().validate(date)
  }

  validateCVC (cvcValue) {
    return new ValidateCVC().validate(cvcValue)
  }
}
