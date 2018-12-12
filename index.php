<!DOCTYPE html>

<html lang="en">
<head>
  <title>ETL</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <link rel="stylesheet" type="text/css" href="style.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="script.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<?php

$fileWrite = '';    
$myFile = "data.txt";
if(isset($_POST['fileWrite']) && !empty($_POST['fileWrite'])) {
$fileWrite = $_POST['fileWrite'].PHP_EOL;
}
if($fileWrite) {
$fh = fopen($myFile, 'a') or die("can't open file"); //Make sure you have permission
fwrite($fh, $fileWrite);
fclose($fh);
}
?>


</head>
<body>

<!-- Navbar -->
<nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="index.html">ETL</a>
    </div>
    <button id="extract" class="btn btn-danger navbar-btn">Extract</button>
	<button id="transform" class="btn btn-danger navbar-btn">Transform</button>
	<button id="load" class="btn btn-danger navbar-btn">Load</button>
	<button class="btn btn-danger navbar-btn">Extract, Transform, Load</button>
  </div>
</nav>

<!-- Page -->

<div id="boxes">
	Downloaded HTML: <br>
	<textarea rows="4" cols="50" id="pobranyHtml" readonly></textarea>
	<br>

	<form method="post" target="_blank">
	Transformed data: <br>
	<textarea type="text" name="fileWrite" rows="4" cols="50" id="transHtml" readonly></textarea>
	<input type="submit" value="zapisz do pliku .txt" id="zapisz"/>
	</form>
	
	<div id="stats">
	Console: <br>
	</div>


</div>

</body>
</html>