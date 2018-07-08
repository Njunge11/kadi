import { validateCardNumber } from '../src/index'
let cardNumber
let validate
let cardNumbers = {
  amex: ['378282246310005', '371449635398431', '378734493671000', '370000000000002'],
  visa: ['4111111111111111', '4012888888881881', '4222222222222', '4007000000027', '4012888818888'],
  mastercard: ['5555555555554444', '5105105105105100', '5424000000000015', '2223000010309703', '2223000010309711'],
  JCB: ['3530111333300000', '3566002020360505', '38000000000006'],
  dinersclub: ['30569309025904', '38520000023237', '38000000000006'],
  discover: ['6011111111111117', '6011000990139424', '6011000000000012']
}

describe('Card number validation', () => {
  it('Null card number should return false', () => {
    cardNumber = null
    validate = validateCardNumber({ cardNumber: cardNumber, onInput: false })
    expect(validate.valid).toBe(false)
  })
  it('Empty card number should return false', () => {
    cardNumber = ''
    validate = validateCardNumber({ cardNumber: cardNumber, onInput: false })
    expect(validate.valid).toBe(false)
  })
  it('Undefined card number should return false', () => {
    cardNumber = undefined
    validate = validateCardNumber({ cardNumber: cardNumber, onInput: false })
    expect(validate.valid).toBe(false)
  })
  it("Card number that's not fully numeric should return false", () => {
    cardNumber = '424242424242424!'
    validate = validateCardNumber({ cardNumber: cardNumber, onInput: false })
    expect(validate.valid).toBe(false)
  })
  it("Card number that's not a string should return false", () => {
    cardNumber = 4111111111111111
    validate = validateCardNumber({ cardNumber: cardNumber, onInput: false })
    expect(validate.valid).toBe(false)
  })
  it('Invalid card number should return false', () => {
    cardNumber = '4111111111111112'
    validate = validateCardNumber({ cardNumber: cardNumber, onInput: false })
    expect(validate.valid).toBe(false)
  })
  it('When options are not provided return false', () => {
    validate = validateCardNumber({})
    expect(validate.valid).toBe(false)
  })
  Object.keys(cardNumbers).map((number) => {
    const cardNumberArray = cardNumbers[number]
    cardNumberArray.map((card, index) => {
      const count = index + 1
      it('Valid ' + number + ' test card number ' + count + ' should return true', () => {
        validate = validateCardNumber({ cardNumber: card, onInput: false })
        expect(validate.valid).toBe(true)
      })
    })
  })
})
