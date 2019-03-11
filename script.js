var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomise = document.querySelector(".randomise");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function setRandomColors(event) {
	color1.value = getRandomColor();
	color2.value = getRandomColor();
	setGradient();
}

function getRandomColor() {
	var color = Math.floor(Math.random() * 16777215).toString(16);
	for(var i = color.length; i < 6; i++) {
		color = "0" + color;
	}
	return "#" + color;
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomise.addEventListener("click", setRandomColors);

setGradient();