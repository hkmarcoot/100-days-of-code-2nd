<?php
namespace Codecademy;

function willWeEat($meal, $isHungry){
  if($meal === "dessert" || $isHungry === TRUE){
    return "Yum. Thanks!";
  } else {
    return "No thanks. We're not hungry.";
  }
}

echo willWeEat("dessert", TRUE);
echo "\n";
echo willWeEat("noodles", FALSE);