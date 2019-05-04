 
<?php
// Get the value passed
$numberToDbl = $_POST["data"];
 
// Create the response
echo $_POST["data"] . " Times 2 Equals ";
$doubleUp = $numberToDbl * 2;
echo $doubleUp;
?>
