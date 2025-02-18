<?php
// Write your code below:
function increaseEnthusiasm($str){
  return $str . "!";
}

echo increaseEnthusiasm("Hello");

function repeatThreeTimes($str){
  return $str . $str . $str;
}

echo repeatThreeTimes("Go");

echo increaseEnthusiasm(repeatThreeTimes("Go"));