## Sanitizing for Back-end Storage

In addition to sanitizing data that is displayed to the user, we always need to sanitize all data before storing it in our own databases. There are serious security concerns with storing data in a database—attempting to store unsanitized inputs into a database can allow a bad actor to corrupt or gain access to sensitive information. To sanitize for back-end security, we will use the methods discussed earlier in this lesson.

We’ll also want to sanitize the formatting: make sure the data stored in our database follows consistent formatting. If we’re going to be displaying or using the data, we’ll want to make sure it always looks the same. So even though we may want to let users input their phone numbers with or without parentheses or dashes, when we store it in the database, we’ll want to change all phone numbers to the same format.

To sanitize data formatting, we can use the built-in preg_replace() function. The preg_replace() takes a regular expression, some replacement text, and a subject string; First, It searches through the subject string for instances that match the regular expression. Then, it outputs a copy of the subject string that has the matched instances replaced by the replacement string:

```
$one = "codeacademy";
$two = "CodeAcademy";
$three = "code academy";
$four = "Code Academy";

$pattern = "/[cC]ode\s*[aA]cademy/";
$codecademy = "Codecademy";

echo preg_replace($pattern, $codecademy, $one);
// Prints: Codecademy

echo preg_replace($pattern, $codecademy, $two);
// Prints: Codecademy

echo preg_replace($pattern, $codecademy, $three);
// Prints: Codecademy

echo preg_replace($pattern, $codecademy, $four);
// Prints: Codecademy

```

In the above code, we used the regular expression /[cC]ode\s\*[aA]cademy/ which matches most of the common ways people misspell Codecademy. The replacement string is the proper formatting, "Codecademy", meaning that we replaced the matching misspelled versions with the correct spelling and format. Using preg_replace(), we were able to transform the four versions of our company name to the correct version: "Codecademy".
