<?php
namespace Codecademy;

function both($para1, $para2){
  if($para1 === TRUE){
    if($para2 === TRUE){
      return "both";
    } else {
      return "not both";
    }
  } else {
      return "not both";
    }
}

echo both(TRUE, TRUE);
echo "\n";
echo both(FALSE, TRUE);