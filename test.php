<?php
$number = '3782';
$sum = 0;
     $numDigits = strlen($number);
     $parity = $numDigits % 2;
     for ($i = 0; $i < $numDigits; $i++) {
         $digit = substr($number, $i, 1);
         if ($parity == ($i % 2)) {
             $digit <<= 1;
             if (9 < $digit) {
                 $digit = $digit - 9;
             }
         }
         $sum += $digit;
     }
     echo (0 == ($sum % 10));
