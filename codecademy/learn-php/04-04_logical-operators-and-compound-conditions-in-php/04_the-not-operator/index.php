<?php
namespace Codecademy;

function duckDuckGoose($is_goose){
  if(!$is_goose){
    return "duck";
  } else {
    return "goose!";
  }
}
echo duckDuckGoose(FALSE);
echo duckDuckGoose(FALSE);
echo duckDuckGoose(TRUE);