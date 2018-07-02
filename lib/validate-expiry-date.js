module.exports = class ValidateExpiryDate {
  validate (date) {
    /**
       * 1.Undefined or empty date - done
2.string that does not match regex (10/12)
3.string that matches regex (10/12)
4.Invalid month / invalid year
5.Invalid month / valid year
6.valid month / invalid year
7.valid month/ valid year
8.past month / past year
9.past month / current year
10.current month / past year
11.curent month / current year
       */
    if (!date) {
      return false
    }
    return /^(0[123456789]|10|11|12)([/])([1-2][0-9][0-9][0-9])$/.test(date)
    // const currentDate = new Date()
    // const expiryDate = new Date()
    // const providedExpiryDate = date.split('/')
    // const month = providedExpiryDate[0]
    // const year = providedExpiryDate[1]
    // expiryDate.setFullYear(year, month, 0)
    // return date ? expiryDate > currentDate : false
  }
}
