<?php
$servername = "sbazy.uek.krakow.pl";
$username = "s194864";
$password = "zJEvxGCm";
$dbname = "s194864";


// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "LOAD DATA LOCAL INFILE 'data.txt' 
INTO TABLE ogloszenia COLUMNS TERMINATED BY '\t'";
if ($conn->query($sql) === TRUE) {
    echo "New records created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}


$conn->close();
?>