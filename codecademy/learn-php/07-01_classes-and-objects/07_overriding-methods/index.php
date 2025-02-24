<?php
class Beverage {
  public $temperature;
  
  function getInfo() {
    return "This beverage is $this->temperature.";
  }
}

class Milk extends Beverage {
  function __construct() {
    $this->temperature = "cold";
  }
  function getInfo(){
    return "This beverage is $this->temperature. I like my milk this way.";
  }
}

$obj = new Milk();
echo $obj->getInfo();