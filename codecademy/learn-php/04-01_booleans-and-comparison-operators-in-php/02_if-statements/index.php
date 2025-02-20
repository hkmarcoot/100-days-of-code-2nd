<?php
namespace Codecademy;

function markAnswer($bool){
  if($bool){
    return 'green';
  } else {
    return 'red';
  }
}

echo markAnswer(TRUE);
echo "\n";
echo markAnswer(FALSE);