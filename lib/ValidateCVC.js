/**
 * Kadi
 * Copyright(c) 2018 Njunge Njenga
 * MIT Licensed
 */
export default class ValidateCVC {
  validate (cvcValue) {
    const cvc = Number(cvcValue)
    const cvcLength = cvcValue ? cvcValue.length : ''
    if (isNaN(cvc) || !cvc) {
      return false
    } else {
      return !!(cvcLength >= 3 && cvcLength <= 4)
    }
  }
}
