Here are some of the ways we can validate input using validator.js:

isEmail() - Checks if the input is a valid email address.
isLength() - Checks if the input is a certain length. An object with min and max can be passed as an argument.
isNumeric() - Checks if the input is numeric.
contains() - Checks if the input contains a certain value.
isBoolean() - Checks if the input is a boolean value.
isCurrency() - Checks if the input is currency-formatted.
isJSON() - Checks if the input is JSON.
isMobilePhone() - Checks if the input is a valid mobile phone number.
isPostalCode() - Checks if the input is a valid postal code.
isBefore() and isAfter() - Checks if a date is before or after another date.

We can use validator.js functions in a post route to validate data that is sent inside a request. The following example extracts the value from a form named “email” and logs whether it is a valid email address.

```
app.post('/submit',
(req, res) => {
console.log( validator.isEmail(req.body.email));
})
```

If you’d like to run the application, type node app.js into the bash Terminal and then refresh the mini browser.
