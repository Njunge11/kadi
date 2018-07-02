/**
 * Kadi
 * Copyright(c) 2018 Njunge Njenga
 * MIT Licensed
 * TO-DO - add input field formatting and SVG's
 */
import ValidateCardNumber from '../lib/ValidateCardNumber'
import ValidateExpiryDate from '../lib/ValidateExpiryDate'
import ValidateCVC from '../lib/ValidateCVC'

const validateCardNumber = (cardNumber) => {
  return new ValidateCardNumber().validate(cardNumber)
}

const validateExpiryDate = (date) => {
  return new ValidateExpiryDate().validate(date)
}

const validateCVC = (cvcValue) => {
  return new ValidateCVC().validate(cvcValue)
}

export { validateCardNumber, validateExpiryDate, validateCVC }
