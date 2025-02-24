## Request Superglobals

Since PHP was built with web development as a primary use case, it has functionality to ease processing of HTML requests. When the front end client makes a request to a backend PHP server, several superglobals related to the request are available to the PHP script. Superglobals are automatic global variables which are available in all scopes throughout a script.

The list of superglobals in PHP includes the following:

$GLOBALS
$\_SERVER
$_GET
$\_POST
$_FILES
$\_COOKIE
$_SESSION
$\_REQUEST
$\_ENV

For this lesson, we are focusing on three of these:

- $\_GET - this contains an associative array of variables passed to the current script using query parameters in the URL
- $\_POST - this contains an associative array of variables passed to the current script using a form submitted using the “POST” method
- $\_REQUEST - this contains the contents of $\_GET, $\_POST, and $\_COOKIE
