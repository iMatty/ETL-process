
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

$sql = "DELETE FROM ogloszenia";
$result = $conn->query($sql);

if ($conn->query($sql) === TRUE) {
    echo "Records deleted successfully";
} else {
    echo "Error deleting records: " . $conn->error;
}


$conn->close();
?>
