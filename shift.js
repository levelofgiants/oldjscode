var shiftValue;
function scramble(t, shiftKey)
{
	var tempstring = "";
	if(shiftKey > 26)
		tempstring = "Invalid shift number. Please enter a number between 0 and 26.";
	else
	{
		for(var x=0;x < t.length;x++)
		{
			if(t.charCodeAt(x) != 32)
			{
				var uppers = t.toUpperCase();
				var num = Number(uppers.charCodeAt(x)) + Number(shiftKey);
				if(num > 90)
					num = 65 + (num - 90) - 1;		
				tempstring += String.fromCharCode(num);
			}
			else
				tempstring += " ";
		}
		
	}
	document.getElementById("output-box").innerHTML = tempstring;
}
function descramble(t, shiftKey)
{
	var tempstring = "";
	if(shiftKey > 26)
		tempstring = "Invalid shift number. Please enter a number between 0 and 26.";
	else
	{
		for(var x=0;x < t.length;x++)
		{
			if(t.charCodeAt(x) != 32)
			{
				var uppers = t.toUpperCase();
				var numCode = Number(uppers.charCodeAt(x)) - Number(shiftKey);
				if(numCode < 65)
					numCode = 90 - (65 - numCode) + 1;
				tempstring += String.fromCharCode(numCode);
			}
			else
				tempstring += " ";
		}
		
	}
	document.getElementById("output-box-u").innerHTML = tempstring;
}