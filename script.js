$(document).ready(function()
{
	$("#transform").prop("disabled",true);
	$("#load").prop("disabled",true);
	
	$("#extract").click(function()
	{
		$("#transform").prop("disabled",false);
	});
	
	$("#transform").click(function()
	{
		$("#load").prop("disabled",false);
	});
	
}
);