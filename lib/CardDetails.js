/**
 * Kadi
 * Copyright(c) 2018 Njunge Njenga
 * MIT Licensed
 */

'use strict'

module.exports = {
  visa: {
    regex: /^4[0-9]{12}(?:[0-9]{3})?$/,
    cardType: '001'
  },
  mastercard: {
    regex: /^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/,
    cardType: '002'
  },
  amex: {
    regex: /^3[47][0-9]{13}$/,
    cardType: '003'
  },
  discover: {
    regex: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
    cardType: '004'
  },
  dinnersclub: {
    regex: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
    cardType: '005'
  },
  JCB: {
    regex: /^(?:2131|1800|35\d{3})\d{11}$/,
    cardType: '007'
  }
}
