<?php
namespace Codecademy;

function agreeOrDisagree($str1, $str2){
  if($str1 === $str2){
    return "You agree!";
  } else {
    return "You disagree!";
  }
}

echo agreeOrDisagree("sure", "sure") . "\n";
echo agreeOrDisagree("sure", "not agree") . "\n";

function checkRenewalMonth($str){
  if($str !== "February"){
    return "Welcome!";
  } else {
    return "Time to renew";
  }
}

echo checkRenewalMonth("January") . "\n";
echo checkRenewalMonth("February") . "\n";