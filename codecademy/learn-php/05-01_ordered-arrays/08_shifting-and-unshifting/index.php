<?php
namespace Codecademy;
$record_holders = [];
// Write your code below:
array_unshift($record_holders, "Tim Montgomery", "Maurice Greene", "Donovan Bailey", "Leroy Burrell", "Carl Lewis");
$array = array_shift($record_holders);
array_unshift($record_holders, "Justin Gatlin", "Asafa Powell");
$array = array_shift($record_holders);
array_unshift($record_holders, "Usain Bolt");