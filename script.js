
for(var i = 0; i < 6000; i++) {
	document.querySelector(".container").innerHTML += "<div class='box'></div>";
}
document.querySelector(".container").style.background = "white";
var arrayOfBoxes = document. querySelectorAll(".box");
console.log(arrayOfBoxes);

for(var i = 0; i < arrayOfBoxes.length; i++) {
	if(i % 2 === 0) {
		arrayOfBoxes[i].style.backround= "magenta";

	}
}