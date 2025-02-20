<?php
namespace Codecademy;

function ternaryCheckout($num){
  return $num <= 12 ? "express lane" : "regular lane";
}

function ternaryVote($num){
  return $num >= 18 ? "yes" : "no";
}

echo ternaryCheckout(10);
echo "\n";
echo ternaryCheckout(14);
echo "\n";
echo ternaryVote(19);
echo "\n";
echo ternaryVote(16);