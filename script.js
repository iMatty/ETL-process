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

		var titleStrony = str.indexOf("<title>") + 7;
		var titleStronyKoniec = str.indexOf("</title>");
		var s1 = $('#pobranyHtml').val().substring(titleStrony,titleStronyKoniec); //tytul strony

		var title1 = str.indexOf('<a class=\\\"teaser'); // 1 ogloszenie
		var titleKoniec1 = str.indexOf("</div>\\n</a>\\n\\n\\n");
		var s2 = $('#pobranyHtml').val().substring(title1,titleKoniec1);

		var title2 = str.indexOf('<a class=\\\"teaser', title1+1); // 2 ogloszenie
		var titleKoniec2 = str.indexOf("</div>\\n</a>\\n\\n\\n", titleKoniec1+1);
		var s3 = $('#pobranyHtml').val().substring(title2,titleKoniec2);

		var doBoxa = s1 + " " + s2 + " " + s3;
		doBoxa = doBoxa.replace(/\\n/g,""); // proby sprzatania xD
		var box = $('#transHtml').val(doBoxa); // wklejanie do boxa
});

	
	
	
	
	
	
	
	
	
	
	$("#load").click(function()
	{
		$(this).removeClass("btn btn-danger navbar-btn").addClass("btn btn-success navbar-btn");
		$("#load").prop("disabled",true);
	});	
}
);