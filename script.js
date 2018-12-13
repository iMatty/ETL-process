$(document).ready(function()
{
	$("#extract").prop("enabled",true);
	$("#transform").prop("disabled",true);
	$("#load").prop("disabled",true);

	$("#zapisz").prop("disabled",true);
	
	$("#extract").click(function()
	{
		$(this).removeClass("btn btn-danger navbar-btn").addClass("btn btn-success navbar-btn");
		$("#transform").prop("disabled",false);	
		$("#extract").prop("disabled",true);

		$.get("get-website.php", function(data) {
        var json = {
            html: JSON.stringify(data),
            delay: 1
        };
		$('#pobranyHtml').val(json.html);
        });
		
		$("#stats").html('- Downloaded HTML: Pobrano kod HTML <a href="https://gratka.pl/zwierzeta/psy/krakow">https://gratka.pl/zwierzeta/psy/krakow</a><br>');
});

	$("#transform").click(function()
	{
		$(this).removeClass("btn btn-danger navbar-btn").addClass("btn btn-success navbar-btn");
		$("#load").prop("disabled",false);
		$("#transform").prop("disabled",true);

		$("#zapisz").prop("disabled",false);
	
		var str = $('#pobranyHtml').val();
		
		// ilosc ogloszen
		var a = '<div class=\\"content__counter\\">';					
		var iloscOgloszenP = str.indexOf(a) + a.length;
		var iloscOgloszenK = str.indexOf('</div>', iloscOgloszenP);
		var iloscOgloszen = $('#pobranyHtml').val().substring(iloscOgloszenP,iloscOgloszenK-12);
		$("#stats").html("- Transformed data: Pobrano " + 31 + " ogloszen"); // tu powinno byc iloscOgloszen zamiast "32" ale jeszcze nie skonczylem


		// id_ogloszen
		const id_ogloszen = [];
		var p = 0;
		var k = 0;
		for (var i=0; i<32; i++) {				
			p = str.indexOf('id=\\"offer-', p+i) + 11;
			k = str.indexOf('\\"\\n', p);
			var id_ogloszenia = $('#pobranyHtml').val().substring(p,k);		
			id_ogloszen[i] = id_ogloszenia;
		}


		// tytuly_ogloszen
		const tytuly_ogloszen = [];
		var p = 0;
		var k = 0;
		for (var i=0; i<32; i++) {				
			p = str.indexOf('teaser__title', p+i) + 16;
			k = str.indexOf('</h2>\\n', p);
			var tytul_ogloszenia = $('#pobranyHtml').val().substring(p,k);		
			tytuly_ogloszen[i] = tytul_ogloszenia;
		}

		// linki_ogloszenia
		const linki_ogloszenia = [];
		var p = 0;
		var k = 0;
		for (var i=0; i<32; i++) {				
			p = str.indexOf('\\n   href=\\"', p+i) + 12;
			k = str.indexOf('\\"\\n', p);
			var link_ogloszenia = $('#pobranyHtml').val().substring(p,k);		
			linki_ogloszenia[i] = link_ogloszenia;
		}


		// ceny_psiakow
		const ceny_psiakow = [];
		var p = 0;
		var k = 0;
		for (var i=0; i<32; i++) {				
			p = str.indexOf('teaser__price\\', p+i) + 36;
			k = str.indexOf('\\n', p);
			var cena_psiaka = $('#pobranyHtml').val().substring(p,k);		
			ceny_psiakow[i] = cena_psiaka;
		}
		//$("#transHtml").append(ceny_psiakow[0]);


		// aktualizacje
		const aktualizacje = [];
		var p = 0;
		var k = 0;
		for (var i=0; i<32; i++) {				
			p = str.indexOf('Aktualizacja: ', p+i) + 14;
			k = str.indexOf('</li>\\n', p);
			var aktualizacja = $('#pobranyHtml').val().substring(p,k);		
			aktualizacje[i] = aktualizacja;
		}
		//$("#transHtml").append(aktualizacje[0]);




	   	// ogloszenia	
		for (var i=0; i<32; i++) {
			$("#transHtml").append(id_ogloszen[i] +"\t" + tytuly_ogloszen[i] +"\t" + ceny_psiakow[i] +"\t" + linki_ogloszenia[i] +"\t" + aktualizacje[i]);
			if (i<31) {
			$("#transHtml").append("\n");
 			}
		}			


	
});

	
	$("#load").click(function() {
		$(this).removeClass("btn btn-danger navbar-btn").addClass("btn btn-success navbar-btn");
		$("#load").prop("disabled",true);
		$("#stats").html("- Dane zostaly zaladowane do bazy.");
                var dataString={};
                $.ajax({                                      
                     url:"load.php",
                     type: 'POST',
                     cache:false,
                     data: dataString,
                     beforeSend: function() {},
                     timeout:10000,
                     error: function() { },     
                     success: function(response) {
                        $("#response").html(response);
                        alert(response);
                     } 	
		});
	});	

	$("#ogloszenia").click(function() {
                var dataString={};
                $.ajax({                                      
                     url:"ogloszenia.php",
                     type: 'POST',
                     cache:false,
                     data: dataString,
                     beforeSend: function() {},
                     timeout:10000,
                     error: function() { },     
                     success: function(response) {
                        $("#stats").html(response);
                        //alert(response);
                     } 	
		});
	});

	$("#usun").click(function() {
                var dataString={};
                $.ajax({                                      
                     url:"delete.php",
                     type: 'POST',
                     cache:false,
                     data: dataString,
                     beforeSend: function() {},
                     timeout:10000,
                     error: function() { },     
                     success: function(response) {
                        $("#response").html(response);
                        alert(response);
                     } 	
		});
	});

	$("#save").click(function() {
                var dataString={};
                $.ajax({                                      
                     url:"save.php",
                     type: 'POST',
                     cache:false,
                     data: dataString,
                     beforeSend: function() {},
                     timeout:10000,
                     error: function() { },     
                     success: function(response) {
                        $("#response").html(response);
                        alert(response);
                     } 	
		});
	});	

	




	$("#complete").click(function() {
		$(this).removeClass("btn btn-danger navbar-btn").addClass("btn btn-success navbar-btn");
		$("#transform").prop("disabled",false);	
		$("#extract").prop("disabled",true);

		$.get("get-website.php", function(data) {
        		var json = {
            	html: JSON.stringify(data),
            	delay: 1
        		};
		$('#pobranyHtml').val(json.html);
       		});
			
		$("#stats").append('- Downloaded HTML: Pobrano kod HTML <a href="https://gratka.pl/zwierzeta/psy/krakow">https://gratka.pl/zwierzeta/psy/krakow</a><br>');

		$("#load").prop("disabled",false);
		$("#transform").prop("disabled",true);

		$("#zapisz").prop("disabled",false);
	
		var str = $('#pobranyHtml').val();
		
		// ilosc ogloszen
		var a = '<div class=\\"content__counter\\">';					
		var iloscOgloszenP = str.indexOf(a) + a.length;
		var iloscOgloszenK = str.indexOf('</div>', iloscOgloszenP);
		var iloscOgloszen = $('#pobranyHtml').val().substring(iloscOgloszenP,iloscOgloszenK-12);
		$("#stats").append("- Transformed data: Pobrano " + 31 + " ogloszen"); // tu powinno byc iloscOgloszen zamiast "32" ale jeszcze nie skonczylem


		// id_ogloszen
		const id_ogloszen = [];
		var p = 0;
		var k = 0;
		for (var i=0; i<32; i++) {				
			p = str.indexOf('id=\\"offer-', p+i) + 11;
			k = str.indexOf('\\"\\n', p);
			var id_ogloszenia = $('#pobranyHtml').val().substring(p,k);		
			id_ogloszen[i] = id_ogloszenia;
		}


		// tytuly_ogloszen
		const tytuly_ogloszen = [];
		var p = 0;
		var k = 0;
		for (var i=0; i<32; i++) {				
			p = str.indexOf('teaser__title', p+i) + 16;
			k = str.indexOf('</h2>\\n', p);
			var tytul_ogloszenia = $('#pobranyHtml').val().substring(p,k);		
			tytuly_ogloszen[i] = tytul_ogloszenia;
		}

		// linki_ogloszenia
		const linki_ogloszenia = [];
		var p = 0;
		var k = 0;
		for (var i=0; i<32; i++) {				
			p = str.indexOf('\\n   href=\\"', p+i) + 12;
			k = str.indexOf('\\"\\n', p);
			var link_ogloszenia = $('#pobranyHtml').val().substring(p,k);		
			linki_ogloszenia[i] = link_ogloszenia;
		}


		// ceny_psiakow
		const ceny_psiakow = [];
		var p = 0;
		var k = 0;
		for (var i=0; i<32; i++) {				
			p = str.indexOf('teaser__price\\', p+i) + 36;
			k = str.indexOf('\\n', p);
			var cena_psiaka = $('#pobranyHtml').val().substring(p,k);		
			ceny_psiakow[i] = cena_psiaka;
		}
		//$("#transHtml").append(ceny_psiakow[0]);


		// aktualizacje
		const aktualizacje = [];
		var p = 0;
		var k = 0;
		for (var i=0; i<32; i++) {				
			p = str.indexOf('Aktualizacja: ', p+i) + 14;
			k = str.indexOf('</li>\\n', p);
			var aktualizacja = $('#pobranyHtml').val().substring(p,k);		
			aktualizacje[i] = aktualizacja;
		}
		//$("#transHtml").append(aktualizacje[0]);




	   	// ogloszenia	
		for (var i=0; i<32; i++) {
			$("#transHtml").append(id_ogloszen[i] +"\t" + tytuly_ogloszen[i] +"\t" + ceny_psiakow[i] +"\t" + linki_ogloszenia[i] +"\t" + aktualizacje[i]);
			if (i<31) {
			$("#transHtml").append("\n");
 			}
		}			
		$(this).removeClass("btn btn-danger navbar-btn").addClass("btn btn-success navbar-btn");
		$("#load").prop("disabled",true);
		$("#stats").append("<br>- Dane zostaly zaladowane do bazy.");
                var dataString={};
                $.ajax({                                      
                     url:"load.php",
                     type: 'POST',
                     cache:false,
                     data: dataString,
                     beforeSend: function() {},
                     timeout:10000,
                     error: function() { },     
                     success: function(response) {
                        $("#response").html(response);
                        alert(response);
                     } 	
		});
	});
});