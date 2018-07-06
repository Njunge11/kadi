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

const validateCardNumber = (options, result) => {
  const cardNumber = options.cardNumber
  if (options.onInput) {
    document.querySelector('.' + options.element).onkeyup = (e) => {
      return result(new ValidateCardNumber().validate(e.target.value.replace(/\s/g, '')))
    }
    document.querySelector('.' + options.element).onkeydown = (e) => {
      return result(new ValidateCardNumber().validate(e.target.value.replace(/\s/g, '')))
    }
  }

  return new ValidateCardNumber().validate(cardNumber ? cardNumber.replace(/\s/g, '') : '')
}

const validateExpiryDate = (date) => {
  return new ValidateExpiryDate().validate(date)
}

const validateCVC = (cvcValue) => {
  return new ValidateCVC().validate(cvcValue)
}

const validateCardNumberRegex = (cardNumber) => {
  return new ValidateCardNumber().regexCheck(cardNumber)
}

const formatCardInput = (className) => {
  document.querySelector('.' + className).oninput = (e) => {
    const card = new FormatCardInput()
    e.target.value = card.format(e.target.value) // format input
    card.test(e.target.value, className) // append image
  }
}

export { validateCardNumber, validateExpiryDate, validateCVC, formatCardInput, validateCardNumberRegex }
