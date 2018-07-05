export default class FormatCardInput {
  format (value) {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '')
    const matches = v.match(/\d{4,16}/g)
    const match = (matches && matches[0]) || ''
    let parts = []
    let i
    let len
    for (i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4))
    }
    if (parts.length) {
      return parts.join(' ')
    } else {
      return value
    }
  }

  test (number, id) {
    const a = this.addLabel(number)
    if (a) {
      if (!document.querySelector('.kadi')) {
        console.log(id)
        const label = document.createElement('label')
        label.className = 'kadi'
        label.appendChild(document.querySelector('#' + id))
        label.setAttribute('style', this.getCardImage(number))
        document.querySelector('.kadi-container').appendChild(label)
        document.querySelector('#' + id).focus()
      }
    } else {
      if (document.querySelector('.kadi')) {
        const fragment = document.createDocumentFragment()
        const element = document.querySelector('.kadi')
        while (element.firstChild) {
          fragment.appendChild(element.firstChild)
        }
        element.parentNode.replaceChild(fragment, element)
        document.querySelector('#' + id).focus()
      }
    }
  }
  addLabel (number) {
    const cardConfigs = [4, 22, 27, 37, 51, 55, 60, 30, 38, 35]

    const a = number.substring(2, 0)
    if (number.indexOf('4') === 0) {
      return true
    } else if (cardConfigs.includes(Number(a))) {
      return true
    } else {
      return false
    }
  }
  getCardImage (number) {
    let image
    if (/^(4)$/.test(number)) {
      image = 'background: url("https://checkout.stripe.com/m/lib/images/cards/visa@2x-01c4f56e15c08f3ecac8a23f1e072716.png") center / contain no-repeat'
    } else if (/^(22|27|51|55)$/.test(number)) {
      image = 'background: url("https://checkout.stripe.com/m/lib/images/cards/mastercard@2x-99eecae3785c917c4613f897801fefcd.png") center / contain no-repeat'
    } else if (/^(37)$/.test(number)) {
      image = 'background: url("https://checkout.stripe.com/m/lib/images/cards/amex@2x-1923ca159493394a8f9bb9cbef4ab379.png") center / contain no-repeat'
    } else if (/^(60)$/.test(number)) {
      image = 'background: url("https://checkout.stripe.com/m/lib/images/cards/discover@2x-7015ac7a22e2f8449601bbbd8464eb0d.png") center / contain no-repeat'
    } else if (/^(30|38)$/.test(number)) {
      image = 'background: url("https://checkout.stripe.com/m/lib/images/cards/diners@2x-fc9c2bf2b4555d0a8afd826bc6df8e00.png") center / contain no-repeat'
    } else if (/^(35)$/.test(number)) {
      image = 'background: url("https://checkout.stripe.com/m/lib/images/cards/jcb@2x-b14ad6b69b44825628b9b6ec9fc9843d.png") center / contain no-repeat'
    }
    return image
  }
}
