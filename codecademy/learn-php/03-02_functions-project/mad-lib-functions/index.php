<?php
function generateStory($singular_noun, $verb, $color, $distance_unit)
{
  $story = "\nThe ${singular_noun}s are lovely, ${color}, and deep.\nBut I have promises to keep,\nAnd ${distance_unit} to go before I ${verb},\nAnd ${distance_unit} to go before I ${verb}.\n";
  return $story;
}

echo generateStory("man", "hit", "white", 11);
echo generateStory("cat", "eat", "red", 5);
echo generateStory("dog", "sleep", "blue", 8);