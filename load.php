<?php
$servername = "sbazy.uek.krakow.pl";
$username = "s194864";
$password = "zJEvxGCm";
$dbname = "s194864";

$id_ogloszenia = '123458';
$tytul = 'Szczeniaki dog niemiecki';
$data_wystawienia = '2018-09-15';
$data_urodzenia = '2018-09-01';
$rodowod = 'FCI';
$miejscowosc = 'Kraków';
$plec = 'on';
$cena = 2500.99;
$do_negocjacji = 'tak';
$do_odbioru = 'od zaraz';

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "INSERT INTO ogloszenia(id_ogloszenia, tytul, data_wystawienia, data_urodzenia, rodowod, miejscowosc, plec, cena, do_negocjacji, do_odbioru)
VALUES ('$id_ogloszenia', '$tytul', '$data_wystawienia', '$data_urodzenia', '$rodowod', '$miejscowosc', '$plec', $cena, '$do_negocjacji', '$do_odbioru')";
if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>