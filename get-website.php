<?php

	$html=file_get_contents('https://gratka.pl/zwierzeta/psy/krakow');
	$html_2=file_get_contents('https://gratka.pl/zwierzeta/psy/krakow?page=2');
	$html_3=file_get_contents('https://gratka.pl/zwierzeta/psy/krakow?page=3');
	$html_4=file_get_contents('https://gratka.pl/zwierzeta/psy/krakow?page=4');

	echo $html;
	echo $html_2;
	echo $html_3;
	echo $html_4;




?>