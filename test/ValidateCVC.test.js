import { validateCVC } from '../src/index'
describe('Card CVC validation', () => {
  it('Null CVC should return false', () => {
    const cvc = null
    const valid = validateCVC(cvc)
    expect(valid).toBe(false)
  })
  it('Empty CVC should return false', () => {
    const cvc = ''
    const valid = validateCVC(cvc)
    expect(valid).toBe(false)
  })
  it('Undefined CVC should return false', () => {
    const cvc = undefined
    const valid = validateCVC(cvc)
    expect(valid).toBe(false)
  })
  it('CVC less than 3 digits should return false', () => {
    const cvc = '1'
    const valid = validateCVC(cvc)
    expect(valid).toBe(false)
  })
  it('CVC greater than 4 digits should return false', () => {
    const cvc = '12345'
    const valid = validateCVC(cvc)
    expect(valid).toBe(false)
  })
  it("CVC that's not fully numeric should return false", () => {
    const cvc = '1A'
    const valid = validateCVC(cvc)
    expect(valid).toBe(false)
  })
  it('If CVC is not a string return false', () => {
    const cvc = 1234
    const valid = validateCVC(cvc)
    console.log(valid)
    expect(valid).toBe(false)
  })
})
