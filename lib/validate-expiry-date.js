/**
 * Kadi
 * Copyright(c) 2018 Njunge Njenga
 * MIT Licensed
 */

'use strict'

module.exports = class ValidateExpiryDate {
  validate (date) {
    if (!date) {
      return false
    } else if (this.regexCheck(date)) {
      const currentDate = new Date()
      const expiryDate = new Date()
      const providedExpiryDate = date.split('/')
      const month = providedExpiryDate[0]
      let year = providedExpiryDate[1]

      // If the year passed is 'YY' convert it to 'YYYY'. This feels 'hacky' for some reason. Please propose a better implementation.
      const lengthOfYear = year.length
      if (Number(lengthOfYear) === 2) {
        const firstTwoDigitsOfTheYear = new Date().getFullYear().toString().slice(0, -2)
        year = firstTwoDigitsOfTheYear + year
      }
      expiryDate.setFullYear(year, month, 0)
      return date ? expiryDate > currentDate : false
    } else {
      return false
    }
  }

  regexCheck (date) {
    return /^(0[123456789]|10|11|12)([/])([1-2][0-9][0-9][0-9]|[0-9][0-9])$/.test(date)
  }
}
