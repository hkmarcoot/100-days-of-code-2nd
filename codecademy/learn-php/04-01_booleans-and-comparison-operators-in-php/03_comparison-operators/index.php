<?php
namespace Codecademy;

function chooseCheckoutLane($num){
  if($num <= 12){
    return "express lane";
  } else {
    return "regular lane";
  }
}

function canIVote($num){
  if($num >= 18){
    return "yes";
  } else {
    return "no";
  }
}

echo chooseCheckoutLane(11) . "\n";
echo chooseCheckoutLane(15) . "\n";
echo canIVote(20) . "\n";
echo canIVote(16) . "\n";