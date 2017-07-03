// Constructor for the entity class
function setView(w, h)
{
	document.getElementById("stage").style.width = w + "px";
	document.getElementById("stage").style.height = h + "px";
}
function animateClip(image,poses,charwidth)
{
	var i = 0;
	var looper = setInterval(function() 
	{
		if(i < poses)
		{
			var newPos = i * charwidth;
			image.style.left = "-" + newPos + "px";
			i++;
		}
		else
			i = 0;
	},100);
}
function stopSanta()
{
	clearInterval(looper);
}
function init()
{	
	setView(60,80);
	animateClip(document.getElementsByTagName("img")[0],11,65);
}
window.onload = init;