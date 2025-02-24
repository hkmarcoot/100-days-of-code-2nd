<?php
class Beverage {
  private $color;
  function setColor($str){
    $this->color = strtolower($str);
  }
  function getColor(){
    return $this->color;
  }
}

$soda = new Beverage();
