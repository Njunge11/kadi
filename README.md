# Kadi
A super simple and flexible client-side javascript library that provides card validation, input masking and brand detection.
### Installation
```
$ npm i kadi
```
### Include Kadi.js
```html
<script type='text/javascript' src='../dist/kadi.js'></script>
```
Append your card input HTML element to a DIV containing the 'kadi-container' class. Also add the 'kadi-card-input' class in the input.
```html
<div class='kadi-container'>
<input type='text' class='kadi-card-input' id='card-number' placeholder='Card number'>
</div>
```
### Card number input masking - maskCardNumberInput()
```javascript
Kadi.maskCardNumberInput('kadi-card-input')
```
### Card expiry date input masking - maskExpiryDateInput()
```javascript
Kadi.maskExpiryDateInput('kaid-expiry-input')
```
### Card number validation - validateCardNumber()
```javascript
Kadi.validateCardNumber('4111111111111111')
```
### Card number expiry date validation - validateExpiryDate()
```javascript
Kadi.validateExpiryDate('10/2029')
```
### CVC validation - validateCVC()
```javascript
Kadi.validateCVC('123')
```

