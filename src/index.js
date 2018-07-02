/**
 * Kadi
 * Copyright(c) 2018 Njunge Njenga
 * MIT Licensed
 * TO-DO - add input field formatting and SVG's
 */
import ValidateCardNumber from './ValidateCardNumber'
import ValidateExpiryDate from './ValidateExpiryDate'
import ValidateCVC from './ValidateCVC'

export default class Kadi {
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
