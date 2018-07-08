import { validateExpiryDate } from '../src/index'
let expiryDate
let valid
describe('Card expiry date validation', () => {
  it('Empty expiry date should return false', () => {
    expiryDate = ''
    valid = validateExpiryDate(expiryDate)
    expect(valid).toBe(false)
  })
  it('Undefine expiry date should return false', () => {
    expiryDate = undefined
    valid = validateExpiryDate(expiryDate)
    expect(valid).toBe(false)
  })
  it('Null expiry date should return false', () => {
    expiryDate = null
    valid = validateExpiryDate(expiryDate)
    expect(valid).toBe(false)
  })
  it('Invalid month and invalid year should return false', () => {
    expiryDate = '13/20005'
    valid = validateExpiryDate(expiryDate)
    expect(valid).toBe(false)
  })
  it('Invalid month and valid year should return false', () => {
    expiryDate = '15/2030'
    valid = validateExpiryDate(expiryDate)
    expect(valid).toBe(false)
  })
  it('Valid month and invalid year should return false', () => {
    expiryDate = '12/20005'
    valid = validateExpiryDate(expiryDate)
    expect(valid).toBe(false)
  })
  it('Past month and past year should return false', () => {
    expiryDate = '06/2009'
    valid = validateExpiryDate(expiryDate)
    expect(valid).toBe(false)
  })
  it('Past month and current year should return false', () => {
    expiryDate = '06/2018'
    valid = validateExpiryDate(expiryDate)
    expect(valid).toBe(false)
  })
  it('Past month and current year should return false', () => {
    expiryDate = '06/2018'
    valid = validateExpiryDate(expiryDate)
    expect(valid).toBe(false)
  })
  it('Current month and past year should return false', () => {
    expiryDate = '07/2017'
    valid = validateExpiryDate(expiryDate)
    expect(valid).toBe(false)
  })
  it('Current month and current year should return true', () => {
    expiryDate = '07/2018'
    valid = validateExpiryDate(expiryDate)
    expect(valid).toBe(true)
  })
  it('Valid month and valid year should return true', () => {
    expiryDate = '09/2020'
    valid = validateExpiryDate(expiryDate)
    expect(valid).toBe(true)
  })
  /**
       * 2.string that does not match regex (10/12)
    3.string that matches regex (10/12)
       */
})
