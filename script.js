$(document).ready(function()
{
	$("#extract").prop("enabled",true);
	$("#transform").prop("disabled",true);
	$("#load").prop("disabled",true);
	
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
});

		


	
	
	$("#transform").click(function()
	{
		$(this).removeClass("btn btn-danger navbar-btn").addClass("btn btn-success navbar-btn");
		$("#load").prop("disabled",false);
		$("#transform").prop("disabled",true);	

		var str = $('#pobranyHtml').val();
		
		// ilosc ogloszen
		var a = '<div class=\\"content__counter\\">';					
		var iloscOgloszenP = str.indexOf(a) + a.length;
		var iloscOgloszenK = str.indexOf('</div>', iloscOgloszenP);
		var iloscOgloszen = $('#pobranyHtml').val().substring(iloscOgloszenP,iloscOgloszenK-12);
		$("#boxes").append("Pobrano " + 15 + " ogloszen"); // tu powinno byc iloscOgloszen zamiast "15" ale jeszcze nie skonczylem


		// id_ogloszen
		const id_ogloszen = [];
		var p = 0;
		var k = 0;
		for (var i=0; i<15; i++) {				
			p = str.indexOf('id=\\"offer-', p+i) + 11;
			k = str.indexOf('\\"\\n', p);
			var id_ogloszenia = $('#pobranyHtml').val().substring(p,k);		
			id_ogloszen[i] = id_ogloszenia;
		}


		// tytuly_ogloszen
		const tytuly_ogloszen = [];
		var p = 0;
		var k = 0;
		for (var i=0; i<15; i++) {				
			p = str.indexOf('teaser__title', p+i) + 16;
			k = str.indexOf('</h2>\\n', p);
			var tytul_ogloszenia = $('#pobranyHtml').val().substring(p,k);		
			tytuly_ogloszen[i] = tytul_ogloszenia;
		}

		// linki_ogloszenia
		const linki_ogloszenia = [];
		var p = 0;
		var k = 0;
		for (var i=0; i<15; i++) {				
			p = str.indexOf('\\n   href=\\"', p+i) + 12;
			k = str.indexOf('\\"\\n', p);
			var link_ogloszenia = $('#pobranyHtml').val().substring(p,k);		
			linki_ogloszenia[i] = link_ogloszenia;
		}


		// ceny_psiakow
		const ceny_psiakow = [];
		var p = 0;
		var k = 0;
		for (var i=0; i<15; i++) {				
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
		for (var i=0; i<15; i++) {				
			p = str.indexOf('Aktualizacja: ', p+i) + 14;
			k = str.indexOf('</li>\\n', p);
			var aktualizacja = $('#pobranyHtml').val().substring(p,k);		
			aktualizacje[i] = aktualizacja;
		}
		//$("#transHtml").append(aktualizacje[0]);




	   	// ogloszenia	
		for (var i=0; i<15; i++) {
			$("#transHtml").append("id_ogloszenia: " + id_ogloszen[i] + ", tytul: " + tytuly_ogloszen[i] + ", cena: " + ceny_psiakow[i] + ", ogloszenie_link: " + linki_ogloszenia[i] + ", aktualizacja: " + aktualizacje[i] + ". ");
		}
			


	
});

	
	
	
	
	
	
	
	
	
	
	$("#load").click(function()
	{
		$(this).removeClass("btn btn-danger navbar-btn").addClass("btn btn-success navbar-btn");
		$("#load").prop("disabled",true);
	});	
}
);