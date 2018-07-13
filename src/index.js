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
  if (typeof cardNumber !== 'string' || !cardNumber) {
    return { valid: false }
  }
  return new ValidateCardNumber().validate(cardNumber.replace(/\s/g, ''))
}

const validateExpiryDate = (expiryDate) => {
  if (typeof expiryDate !== 'string' || !expiryDate) {
    return false
  }
  return new ValidateExpiryDate().validate(expiryDate ? expiryDate.replace(/\s/g, '') : '')
}

const validateCVC = (cvc) => {
  return new ValidateCVC().validate(cvc)
}

const maskCardNumberInput = (className) => {
  document.querySelector('.' + className).oninput = (e) => {
    const card = new FormatCardInput()
    e.target.value = card.format(e.target.value) // format input
    card.test(e.target.value, className) // append image
  }
}
const maskExpiryDateInput = (className) => {
  new FormatExpiryDate().format(className)
}

export { validateCardNumber, validateExpiryDate, validateCVC, maskCardNumberInput, maskExpiryDateInput }
