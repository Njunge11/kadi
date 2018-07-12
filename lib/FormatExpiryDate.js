export default class FormatExpiryDate {
  format (className) {
    const expiryDateElement = document.querySelector('.' + className)
    expiryDateElement.maxLength = 9
    expiryDateElement.oninput = (e) => {
      const expiryInput = e.target.value
      let valueAfterAddingZero
      // Append a '0' at the beginning of every string that does not start with '0' or '1'
      const firstInputsToAddZeroTo = ['2', '3', '4', '5', '6', '7', '8', '9']
      const firsCharacter = expiryInput.charAt(0)
      if (firstInputsToAddZeroTo.includes(firsCharacter)) {
        valueAfterAddingZero = '0' + firsCharacter
        e.target.value = valueAfterAddingZero
        this.formatInputField(e, expiryDateElement)
      } else {
        this.formatInputField(e, expiryDateElement)
      }
    }
  }

  formatInputField (event, expiryDateElement) {
    if (event.target.value.length === 2) {
      this.addBackSlash(event)
      this.handleBackSpaceEventevent(event, expiryDateElement)
    }
  }

  addBackSlash (event) {
    event.target.value = event.target.value + ' / '
  }

  handleBackSpaceEventevent (event, expiryDateElement) {
    expiryDateElement.onkeydown = (event) => {
      // When user hit's back space, strip out the stuff
      if (event.keyCode === 8 && event.target.value.length === 5) {
        event.target.value = event.target.value.replace(/\s/g, '').slice(0, -1)
      }
    }
  }
}
