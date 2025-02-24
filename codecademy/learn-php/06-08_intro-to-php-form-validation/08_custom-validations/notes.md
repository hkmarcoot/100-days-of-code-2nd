## Custom Validations

We’ll often find the validations offered by built-in functions like filter_var() to be insufficient. When validating all but the simplest data, we’ll likely need to write our own, custom input validations.

A very common method for validating data is to compare the input to a pattern we define with a regular expression. The PHP preg_match() function takes two string arguments: a pattern string with a regular expression and a subject string to check. It returns 1 if it matches, 0 if it doesn’t, and FALSE if there was an error.

For example, we can use the regular expression /^[(]_([0-9]{3})[- .)]_[0-9]{3}[- .]\*[0-9]{4}$/ to test for 10-digit North American telephone numbers. It will allow spaces, hyphens, or periods as optional separators as well as optional parentheses around the first three numbers:

```
$pattern = '/^[(]*([0-9]{3})[- .)]*[0-9]{3}[- .]*[0-9]{4}$/';

preg_match($pattern, "(999)-555-2222"); // Returns: 1

preg_match($pattern, "555-2222"); // Returns: 0

```

Before we test for regular expression matches, we’ll want to make sure the input isn’t too long. Regular expressions checks can take a lot of computing power—one way a bad actor can damage our website is by submitting extremely long inputs, putting strain on our servers. This can slow down or even crash our site!

We can use the built-in PHP strlen() function to check the length of a given input. Ultimately, the acceptable input length is a judgement call for the web engineer. In this example, we chose 100 characters, but some names can be much longer.

```
$name = "Aisle Nevertell";
$length = strlen($name);
if ($length > 2 && $length < 100){
  echo "That seems like a reasonable name to me...";
}

```
