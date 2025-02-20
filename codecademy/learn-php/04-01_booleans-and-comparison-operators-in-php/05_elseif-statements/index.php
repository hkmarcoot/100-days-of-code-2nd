<?php
namespace Codecademy;

function whatRelation($num){
  if($num === 100){
    echo "identical twins";
  } elseif ($num >= 35 ) {
    echo "parent and child or full siblings";
  } elseif ($num >= 14) {
    echo "grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings";
  } elseif ($num >= 6) {
    echo "first cousins";
  } elseif ($num >= 3) {
    echo "second cousins";
  } elseif ($num >= 1) {
    echo "third cousins";
  } elseif ($num === 0) {
    echo "not genetically related";
  }
}

whatRelation(35);
echo "\n";
whatRelation(6);
echo "\n";
whatRelation(3);