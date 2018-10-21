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
		
		$("#siteloader").html('<object data="http://krakow.oglaszamy24.pl/ogloszenia/zwierzeta/psy/amstaf/" />');
		$('object').css("overflow", "hidden"); 
	});
	
	
	
	
	
	
	
	
	$("#transform").click(function()
	{
		$(this).removeClass("btn btn-danger navbar-btn").addClass("btn btn-success navbar-btn");
		$("#load").prop("disabled",false);
		$("#transform").prop("disabled",true);
	});
	
	$("#load").click(function()
	{
		$(this).removeClass("btn btn-danger navbar-btn").addClass("btn btn-success navbar-btn");
		$("#load").prop("disabled",true);
	});	
}
);