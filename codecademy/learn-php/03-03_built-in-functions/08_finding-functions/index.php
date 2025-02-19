<?php
namespace Codecademy;

// Write your code below:
function convertToShout($str){
  return strtoupper($str) . "!";
}

echo convertToShout("woah there, buddy");
echo "\n";
echo convertToShout("i just don't know");
echo "\n";

function tipGenerously($float){
  return ceil($float * 1.20);
}

echo tipGenerously(100.00);
echo "\n";
echo tipGenerously(982.27);
echo "\n";
echo tipGenerously(15.67);
echo "\n";

function calculateCircleArea($num){
  return (($num / 2) ** 2 ) * pi();
}

echo calculateCircleArea(25);
echo "\n";
echo calculateCircleArea(30);
echo "\n";
echo calculateCircleArea(872);

# Documentation Link:
# https://www.php.net/manual/en/indexes.functions.php