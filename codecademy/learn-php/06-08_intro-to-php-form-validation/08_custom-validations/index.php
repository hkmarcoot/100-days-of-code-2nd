<?php
$feedback = "";
$success_message = "Thank you for your donation!";
$error_message = "* There was an error with your card. Please try again.";

$card_type = "";
$card_num = "";
$donation_amount = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $card_type = $_POST["credit"];
    $card_num = $_POST["card-num"];
    $donation_amount = $_POST["amount"];

// Write your code here:
  if(strlen($card_num) > 100){
    $feedback = $error_message;
  } else {
    if($card_type === "mastercard"){
      $patternMasterCard = "/5[1-5][0-9]{14}/";
      if(preg_match($patternMasterCard, $card_num)){
        $feedback = $success_message;
      } else {
        $feedback = $error_message;
      }
    } elseif($card_type === "visa"){
      $patternVisa = "/4[0-9]{12}([0-9]{3})?([0-9]{3})?/";
      if(preg_match($patternVisa, $card_num)){
        $feedback = $success_message;
      } else {
        $feedback = $error_message;
      }
    }
  }
  
  
  
  
  
  
  
  
}
?>
<form action="" method="POST">
  <h1>Make a donation</h1>
    <label for="amount">Donation amount?</label>
      <input type="number" name="amount" value="<?= $donation_amount;?>">
      <br><br>
    <label for="credit">Credit card type?</label>
      <select name="credit" value="<?= $card_type;?>">
        <option value="mastercard">Mastercard</option>
        <option value="visa">Visa</option>
      </select>
      <br><br>
      <label for="card-num">Card number?</label>
      <input type="number" name="card-num" value="<?= $card_num;?>">
      <br><br>   
      <input type="submit" value="Submit">
</form>
<span class="feedback"><?= $feedback;?></span>