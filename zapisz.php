<h3>Done. You can close this window and back to application tab.</h3>
<br><br>
<img src="pupper.gif">

<?php

	$fileWrite = '';    
	$myFile = "data.txt";
	if(isset($_POST['fileWrite']) && !empty($_POST['fileWrite'])) {
		$fileWrite = $_POST['fileWrite'].PHP_EOL;
	}
	if($fileWrite) {
		$fh = fopen($myFile, 'w') or die("can't open file");
		fwrite($fh, $fileWrite);
		fclose($fh);
	}
  ?>