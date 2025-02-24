## Using Options with filter_var()

The filter_var() function accepts an optional third argument that allows us to fine-tune the operation of a given filter. This argument, often called $options, takes the form of a nested associative array.

For example, the $options argument can help us validate that an integer is within a specified range when using the integer validation filter FILTER_VALIDATE_INT. To do this, we set $options to a nested array containing the"min_range" and "max_range" keys in a specific format, shown in the following example:

```
function validateAdult ($age){
  $options = ["options" => ["min_range" => 18, "max_range" => 124]];
  if (filter_var($age, FILTER_VALIDATE_INT, $options)) {
    echo("You are ${age} years old.");
  } else {
    echo("That is not a valid age.");
  }
}

validateAdult(18); // Prints: You are 18 years old.
validateAdult(124); // Prints: You are 124 years old.
validateAdult(8); // Prints: That is not a valid age.
validateAdult(200); // Prints: That is not a valid age.

```

In the code above, we wrote a function validateAdult() which takes in an $age integer argument. We then used the filter_var() function to validate the integer was between 18 and 124 (inclusive) by using the FILTER_VALIDATE_INT filter and an $options argument with the value ["options" => ["min_range" => 18, "max_range" => 124]].

You can see which filters accept options in the PHP manual.
https://www.php.net/manual/en/filter.filters.php
