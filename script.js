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

		//var titleStrony = str.indexOf("<title>") + 7;
		//var titleStronyKoniec = str.indexOf("</title>");
		//var s1 = $('#pobranyHtml').val().substring(titleStrony,titleStronyKoniec); //tytul strony

		var title1 = str.indexOf('<a class=\\\"teaser'); // 1 ogloszenie
		var titleKoniec1 = str.indexOf("</div>\\n</a>\\n\\n\\n");
		var s1 = $('#pobranyHtml').val().substring(title1,titleKoniec1);

		var title2 = str.indexOf('<a class=\\\"teaser', title1+1); // 2 ogloszenie
		var titleKoniec2 = str.indexOf("</div>\\n</a>\\n\\n\\n", titleKoniec1+1);
		var s2 = $('#pobranyHtml').val().substring(title2,titleKoniec2);

		var title3 = str.indexOf('<a class=\\\"teaser', title1+2); // 3 ogloszenie
		var titleKoniec3 = str.indexOf("</div>\\n</a>\\n\\n\\n", titleKoniec1+2);
		var s3 = $('#pobranyHtml').val().substring(title2,titleKoniec2);

		var title4 = str.indexOf('<a class=\\\"teaser', title1+3); // 4 ogloszenie
		var titleKoniec4 = str.indexOf("</div>\\n</a>\\n\\n\\n", titleKoniec1+3);
		var s4 = $('#pobranyHtml').val().substring(title3,titleKoniec3);

		var title5 = str.indexOf('<a class=\\\"teaser', title1+4); // 5 ogloszenie
		var titleKoniec5 = str.indexOf("</div>\\n</a>\\n\\n\\n", titleKoniec1+4);
		var s5 = $('#pobranyHtml').val().substring(title4,titleKoniec4);


		// proby sprzatania xD
		var doBoxa = s1 + " " + s2 + " " + s3 + " " + s4 + " " + s5;
		doBoxa = doBoxa.replace(/\\n/g,""); 
		doBoxa = doBoxa.replace(/"/g,"");
		doBoxa = doBoxa.replace(/</g,"");
		doBoxa = doBoxa.replace(/>/g,"");
		doBoxa = doBoxa.replace(/a class=\\teaser \\   /g,"");
		doBoxa = doBoxa.replace(/\\/g,"");
		doBoxa = doBoxa.replace(/div class=teaser__foto/g,"");
		doBoxa = doBoxa.replace(/div class=teaser__tags/g,"");
		doBoxa = doBoxa.replace(/\/div/g,"");
		doBoxa = doBoxa.replace(/.class=/g,"");
		doBoxa = doBoxa.replace(/imgteaser__img lazyload/g,"");
		doBoxa = doBoxa.replace(/\/      divteaser__loader        divteaser__content    divteaser__infoBox            h2/g,"");
		doBoxa = doBoxa.replace(/li/g,"");
		doBoxa = doBoxa.replace(/\/p/g,"");
		doBoxa = doBoxa.replace(/\/ul/g,"");
		doBoxa = doBoxa.replace(/pteaser__price/g,"");
		doBoxa = doBoxa.replace(/divteaser__priceBox                        Zapytaj o cen./g,"");
		doBoxa = doBoxa.replace(/\/h[0-9]/g,"");
		doBoxa = doBoxa.replace(/.span/g,"");
		doBoxa = doBoxa.replace(/ateaser teaser--bigPicture  /g,"");
		doBoxa = doBoxa.replace(/ +(?= )/g,'');

		

	   			
		var box = $('#transHtml').val(doBoxa); // wklejanie do boxa
});

	
	
	
	
	
	
	
	
	
	
	$("#load").click(function()
	{
		$(this).removeClass("btn btn-danger navbar-btn").addClass("btn btn-success navbar-btn");
		$("#load").prop("disabled",true);
	});	
}
);