<?php
// Write your code below:
function calculateTip($cost, $tip = 20){
  return $cost * ( 1 + $tip / 100);
}

echo calculateTip(100, 25);
echo "\n";
echo calculateTip(100);
echo "\n";
echo calculateTip(65, 15);
