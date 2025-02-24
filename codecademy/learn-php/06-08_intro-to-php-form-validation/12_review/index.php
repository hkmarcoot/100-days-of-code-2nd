<?php
$validation_error = "";
$user_language = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
$user_language = $_POST["language"];
  if ($user_language != "PHP") {
    $validation_error = "* Your favorite language must be PHP!";
  } 
}
?>

<form method="post" action="">
Your Favorite Programming Language: <input type="text" name="language" value="<?php echo $user_language;?>">
<span class="error"><?= $validation_error;?></span>
<input type="submit" value="Submit Language">
</form>