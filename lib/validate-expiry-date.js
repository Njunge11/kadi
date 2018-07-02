module.exports = class ValidateExpiryDate {
  validate (date) {
    const currentDate = new Date()
    const expiryDate = new Date()
    const providedExpiryDate = date.split('/')
    const month = providedExpiryDate[0]
    const year = providedExpiryDate[1]
    expiryDate.setFullYear(year, month, 0)
    return date ? expiryDate > currentDate : false
  }
}
