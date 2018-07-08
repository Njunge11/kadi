import { validateCardNumber } from '../src/index'
let cardNumber
let validate
describe('Card number validation', () => {
  it('Null card number should return false', () => {
    cardNumber = null
    validate = validateCardNumber(cardNumber)
    expect(validate.valid).toBe(false)
  })
  it('Empty card number should return false', () => {
    cardNumber = ''
    validate = validateCardNumber(cardNumber)
    expect(validate.valid).toBe(false)
  })
  it('Undefined card number should return false', () => {
    cardNumber = undefined
    validate = validateCardNumber(cardNumber)
    expect(validate.valid).toBe(false)
  })
  it("Card number that's not fully numeric should return false", () => {
    cardNumber = '424242424242424!'
    validate = validateCardNumber(cardNumber)
    expect(validate.valid).toBe(false)
  })
  it("Card number that's not a string should return false", () => {
    cardNumber = 4111111111111111
    validate = validateCardNumber({ cardNumber: cardNumber, onInput: false })
    expect(validate.valid).toBe(false)
  })
})
