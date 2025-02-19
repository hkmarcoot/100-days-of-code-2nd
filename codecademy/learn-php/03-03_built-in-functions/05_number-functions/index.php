<?php
namespace Codecademy;

// Write your code below:
function calculateDistance($num1, $num2){
  return abs($num1 - $num2);
}

echo calculateDistance(-1, 4);
echo "\n";

function calculateTip($num1){
  return round($num1 * 1.18);
}

echo calculateTip(100);
echo "\n";
echo calculateTip(35);
echo "\n";
echo calculateTip(88.77);