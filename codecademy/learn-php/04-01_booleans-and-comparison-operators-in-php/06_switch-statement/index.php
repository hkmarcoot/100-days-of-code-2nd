<?php
namespace Codecademy;

function airQuality($str){
  switch ($str){
    case "green":
      echo "good";
      break;
    case "yellow":
      echo "moderate";
      break;
    case "orange":
      echo "unhealthy for sensitive groups";
      break;
    case "red":
      echo "unhealthy";
      break;
    case "purple":
      echo "very unhealthy";
      break;
    case "maroon":
      echo "hazardous";
      break;
    default:
      echo "invalid color";
  }
}

airQuality("yellow");
echo "\n";
airQuality("green");
echo "\n";
airQuality("red");
echo "\n";