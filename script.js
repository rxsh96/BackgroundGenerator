var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("rButton");

function setGradient(){
	body.style.background = "linear-gradient(to right, "
	+ color1.value
	+", "
	+color2.value
	+")";
	css.textContent = body.style.background + ";";
}

function setRandomGradient(){
	body.style.background = "linear-gradient(to right, "
	+ '#'+(Math.random()*0xFFFFFF<<0).toString(16)
	+", "
	+ '#'+(Math.random()*0xFFFFFF<<0).toString(16)
	+")";
	css.textContent = body.style.background + ";";
}

document.addEventListener("DOMContentLoaded", setGradient);
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", setRandomGradient);