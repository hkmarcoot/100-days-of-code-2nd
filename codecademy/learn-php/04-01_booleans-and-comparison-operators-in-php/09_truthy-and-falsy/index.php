<?php
namespace Codecademy;

function truthyOrFalsy($str){
  if($str){
    return "True";
  } else {
    return "False";
  }
}

echo truthyOrFalsy("hello");
echo "\n";
echo truthyOrFalsy("0");