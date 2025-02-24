## Validating Against Back-end Data

Because modern websites and web applications need to store a lot of data, they usually interact with databases on the back-end. A common type of custom validation involves comparing user input against information in the database. In this exercise, we’ll practice validating against back-end data using PHP arrays to stand in for complicated databases.

An important application of this kind of validation is handling the creation of a user’s account. Before creating the account, it is very important to check that a submitted username isn’t already being used by someone else! In order to do this, we’ll need to check the database for that username.

In the example below, we model the database of users with the associative array $users, which contains keys in the format "username" => "password".

```
$users = ["coolBro123" => "password123!", "coderKid" => "pa55w0rd*", "dogWalker" => "ais1eofdog$"];

function isUsernameAvailable ($username){
  global $users;
  if (isset($users[$username])){
    echo "That username is already taken.";
  } else {
    echo "${username} is available.";
  }
}

isUsernameAvailable("coolBro123");
// Prints: That username is already taken.

isUsernameAvailable("aisleOfPHP");
// Prints: aisleOfPHP is available.

```

The above function isUsernameAvailable uses the built-in function isset() to check if a given $username exists in the $users array. In production, this check would be done by querying the database.
