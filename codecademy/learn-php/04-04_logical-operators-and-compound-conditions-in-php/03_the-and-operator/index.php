<?php
namespace Codecademy;

function clapYourHands($happy, $knowIt){
  if($happy === TRUE && $knowIt === TRUE){
    return "CLAP!";
  } else {
    return ":(";
  }
}

echo clapYourHands(TRUE, TRUE);
echo "\n";
echo clapYourHands(TRUE, FALSE);