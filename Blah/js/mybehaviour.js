$("#gosho").click(function()
{
	alert("dgd");
    $.ajax({url: "C:\Users\bgyaks01\Desktop\New folder\Blah\test.txt", 
	success: function(result)
	{
        $("#pesho").html(result);
    }});
});