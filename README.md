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
### Input masking - maskCardInput()
```javascript
Kadi.formatCardInput('kadi-card-input')
```
### Card validation - validateCardNumber()
#### Standard validation
This is suitable when you want to validate the card input on click of a button.
```javascript
Kadi.validateCardNumber({cardNumber:4111111111111111})
```
#### Validation on input
Wan't to validate the card number on user input? Not to worry, we've got you covered!
```javascript
  Kadi.validateCardNumber({cardNumber:'', onInput:true, element:'kadi-card-input'}, (result) => {
            console.log(result)
   })
```
### ExpiryDate validation - validateExpiryDate()
```javascript
Kadi.validateExpiryDate('10/2029')
```
### CVC validation - validateCVC()
```javascript
Kadi.validateCVC('123')
``

