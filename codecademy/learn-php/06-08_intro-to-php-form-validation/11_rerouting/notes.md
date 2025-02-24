## Rerouting

In this lesson, we’ve learned some basic tools to validate HTML forms on the back-end using PHP. We learned how to send meaningful feedback to our users when their inputs are invalid. But what should we do if the user has submitted a valid form?

So far, we’ve been sending the users back to the same form whether there were errors in their submission or not. We’ve indicated the form was successfully submitted by conditionally displaying a message, but this isn’t always a great user experience. Think of what happens when you log in to your email. Usually, once a form has been submitted successfully, the user is rerouted to an entirely different page.

We can use the PHP header() function to perform redirects. We call the header() function on a string that begins with "Location: ", followed by the URL we want to redirect the user to. For example: "Location: https://www.best-puppy-pix.com/". After invoking the header() function we’ll want to use the language construct exit to terminate the current script.

To work properly, the header() function needs to be run before anything is output by the script—this includes HTML. So we’ll include it in our PHP script before our file outputs any HTML:

```
if (/* Is the submission data validated? */) {
  header("Location: https://www.best-puppy-pix.com/");
  exit;
}

```
