import { validateCVC } from '../src/index'
let cvc
let valid
describe('Card CVC validation', () => {
  it('Null CVC should return false', () => {
    cvc = null
    valid = validateCVC(cvc)
    expect(valid).toBe(false)
  })
  it('Empty CVC should return false', () => {
    cvc = ''
    valid = validateCVC(cvc)
    expect(valid).toBe(false)
  })
  it('Undefined CVC should return false', () => {
    cvc = undefined
    valid = validateCVC(cvc)
    expect(valid).toBe(false)
  })
  it('CVC less than 3 digits should return false', () => {
    cvc = '1'
    valid = validateCVC(cvc)
    expect(valid).toBe(false)
  })
  it('CVC greater than 4 digits should return false', () => {
    cvc = '12345'
    valid = validateCVC(cvc)
    expect(valid).toBe(false)
  })
  it("CVC that's not fully numeric should return false", () => {
    cvc = '1A'
    valid = validateCVC(cvc)
    expect(valid).toBe(false)
  })
  it('If CVC is not a string return false', () => {
    cvc = 1234
    valid = validateCVC(cvc)
    expect(valid).toBe(false)
  })
  it('Valid cvc with 3 digits should return true', () => {
    cvc = '738'
    valid = validateCVC(cvc)
    expect(valid).toBe(true)
  })
  it('Vaid cvc with 4 digits should return true', () => {
    cvc = '383'
    valid = validateCVC(cvc)
    expect(valid).toBe(true)
  })
})
