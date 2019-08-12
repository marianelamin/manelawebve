<?php
// Demand a GET parameter
if ( ! isset($_GET['name']) || strlen($_GET['name']) < 1  ) {
    die('Name parameter missing');
}

// If the user requested logout go back to index.php
if ( isset($_POST['logout']) ) {
    header('Location: index.php');
    return;
}

//$computer = 0; // Hard code the computer to rock
// TODO: Make the computer be random
$computer = rand(0,2);

// Set up the values for the game...
// 0 is Rock, 1 is Paper, and 2 is Scissors
$names = array('Rock', 'Paper', 'Scissors');
$human = isset($_POST["human"]) ? $_POST['human']+0 : -1;
$message = "";

// This function takes as its input the computer and human play
// and returns "Tie", "You Lose", "You Win" depending on play
// where "You" is the human being addressed by the computer
function check($computer, $human) {
    // TODO: Fix this
	$res = (3+$computer-$human)%3;
	
	if($res == 2){
		return '<span>You Win</span><span class="winner">  <i class="far fa-smile"></i></span>';
	}
	else if ($res == 1){
		return '<span>You Lose</span><span class="loser">  <i class="far fa-frown"></i></span>';
	}else{
        return '<span>Tie</span><span class="tie">  <i class="far fa-meh"></i></span>';
	}
}	

if( $human == -1){
    $message = "Please select a strategy and press Play.\n";
} else if ( $human == 3 ) {
    for($c=0;$c<3;$c++) {
        for($h=0;$h<3;$h++) {
            $r = check($c, $h);
            $message = $message."Human=$names[$h] Computer=$names[$c] Result=$r\n";
        }
    }
} else { // this is for 0, 1 and 2
  $result = check($computer, $human);
    $message = "Your Play=$names[$human] Computer Play=$names[$computer] Result=$result\n";
}

?>


<!DOCTYPE html>
<html>
<head>
<title>Rock - Pape - Scissors GAME - Marianela Mendoza</title>
<?php require_once "bootstrap.php"; ?>
</head>
<body>

<a href="/"> &larr; Back</a>


<div class="container">
<h1>Rock Paper Scissors game - Marianela Mendoza</h1>
<?php
if ( isset($_REQUEST['name']) ) {
    echo "<p>Welcome: ";
    echo htmlentities($_REQUEST['name']);
    echo "</p>\n";
}
?>
<form method="post">
<select name="human">
<option value="-1">Select</option>
<option value="0">Rock</option>
<option value="1">Paper</option>
<option value="2">Scissors</option>
<option value="3">Test</option>
</select>
<input type="submit" value="Play">
<input type="submit" name="logout" value="Logout">
</form>

<pre>
<?php
print ($message);
?>
</pre>
</div>
</body>
</html>
