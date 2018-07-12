/**
 * Kadi
 * Copyright(c) 2018 Njunge Njenga
 * MIT Licensed
 * TO-DO - add input field formatting and SVG's
 */
import ValidateCardNumber from '../lib/ValidateCardNumber'
import ValidateExpiryDate from '../lib/ValidateExpiryDate'
import ValidateCVC from '../lib/ValidateCVC'
import FormatCardInput from '../lib/FormatCardInput'
import FormatExpiryDate from '../lib/FormatExpiryDate'
import '../assets/css/kadi.css'

const validateCardNumber = (cardNumber) => {
  return new ValidateCardNumber().validate(cardNumber ? cardNumber.replace(/\s/g, '') : '')
}

const validateExpiryDate = (date) => {
  return new ValidateExpiryDate().validate(date)
}

const validateCVC = (cvcValue) => {
  return new ValidateCVC().validate(cvcValue)
}

const formatCardNumberInput = (className) => {
  document.querySelector('.' + className).oninput = (e) => {
    const card = new FormatCardInput()
    e.target.value = card.format(e.target.value) // format input
    card.test(e.target.value, className) // append image
  }
}

const formatExpiryDateInput = (className) => {
  new FormatExpiryDate().format(className)
}

export { validateCardNumber, validateExpiryDate, validateCVC, formatCardNumberInput, formatExpiryDateInput }
