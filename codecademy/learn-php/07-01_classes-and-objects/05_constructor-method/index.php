<?php
class Beverage {
  public $temperature, $color, $opacity;
  function __construct($temperature, $color){
    $this->temperature = $temperature;
    $this->color = $color;
  }

  function getInfo() {
    return "This beverage is $this->temperature and $this->color.";
  }
}

$obj = new Beverage("cold", "black");
echo $obj->getInfo();