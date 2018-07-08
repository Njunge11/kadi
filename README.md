# Kadi
A super simple and flexible client-side javascript library that provides card validation, input masking and brand detection.
### Installation
```
$ npm i kadi
```
### Include Kadi.js
```
<script type='text/javascript' src='../dist/kadi.js'></script>
```
Append your card input HTML element to a DIV containing the 'kadi-container' class. Also add the 'kadi-card-input' class in the input.
```
<div class='kadi-container'>
<input type='text' class='kadi-card-input' id='card-number' placeholder='Card number'>
</div>
```
### Input masking
```
Kadi.formatCardInput('kadi-card-input')
```
