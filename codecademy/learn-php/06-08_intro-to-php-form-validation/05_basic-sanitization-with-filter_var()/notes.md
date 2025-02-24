## Basic Sanitization with filter_var()

We haven’t yet introduced the most powerful PHP function for sanitizing data: filter_var(). This function operates on a variable and passes it through a “filter” that produces the desired outcome.

As its first argument, filter_var() takes a variable. As its second, it takes an ID representing the type of filtering that should be performed. There are several filters for sanitizing common input types, including FILTER_SANITIZE_EMAIL. The function will return either the sanitized version of the input or FALSE if it was unable to perform the sanitization.

```
$bad_email = '<a href="www.evil-spam.biz">@gmail.com';
echo filter_var($bad_email, FILTER_SANITIZE_EMAIL);
// Prints: ahref=www.evil-spam.biz@gmail.com

```

The FILTER_SANITIZE_EMAIL filter trimmed whitespace throughout our input and removed dangerous characters thus preventing any HTML injection. Essentially, it filtered out any characters not allowed in emails. Once sanitized, we can safely display user inputs.

Of course, $bad_email did not store a valid email in the first place. But since we often want to display invalid form data as a hint for the user, this sanitization would be useful to prevent a man-in-the middle attack. We could also have used htmlspecialchars($bad_email), but that would have produced &lt;a href=&quot;www.evil-spam.biz&quot;&gt;@gmail.com instead. Choose the sanitization method based on the output you want to show to the users.

You can check out the other sanitization filters available in the PHP manual.
https://www.php.net/manual/en/filter.filters.sanitize.php
