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

$sql = "SELECT * FROM ogloszenia ORDER BY aktualizacja";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "id ogłoszenia: " . $row["id_ogloszenia"]. "; Tytuł: " . $row["tytul"] ."; Cena: " . $row["cena"] . "; Link do ogłoszenia: " . $row["link"] . "; Ostatnia aktualizacja: " . $row["aktualizacja"] . "<br>";
    }
} else {
    echo "0 results";
}
$conn->close();
?>
