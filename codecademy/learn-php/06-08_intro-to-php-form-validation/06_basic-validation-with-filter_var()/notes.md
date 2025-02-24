## Basic Validation with filter_var()

We can use the same filter_var() function to validate as well as sanitize! There are a number of provided validation filters, but they work a bit differently from the sanitization filters. If the variable is deemed valid, filter_var() will return it; otherwise, it will return FALSE:

```
$bad_email = 'fake - at - prank dot com';
if (filter_var($bad_email, FILTER_VALIDATE_EMAIL)){
  echo "Valid email!";
} else {
  echo "Invalid email!";
}
// Prints: Invalid email!

```

It’s worth noting that the provided FILTER_VALIDATE_EMAIL filter is stricter than the guidelines regulating acceptable email addresses. If a site needed to accept non-latin characters, for example, the built-in FILTER_VALIDATE_EMAIL filter wouldn’t be sufficient.

Using the provided validation filters is really convenient. You can check out the list of available validation filters in the PHP manual. For example, FILTER_VALIDATE_URL is useful for checking if a string corresponds to a possible URL.
https://www.php.net/manual/en/filter.filters.validate.php
