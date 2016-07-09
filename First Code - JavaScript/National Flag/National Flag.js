var firstColor = "white";
var secondColor = "white";
var thirdColor = "white";

function welcomeMessagePrint() {
	var answer = prompt("Which flag would you like to see? 1-France, 2-Italy");
	return answer;
}

function showCorrectFlag() {
	var choice = welcomeMessagePrint();
	if (choice == 1) {
		firstColor = "red";
		thirdColor = "blue";
	} else if (choice == 2) {
		firstColor = "green";
		thirdColor = "red";
	} else {
		alert("You have entered an incorrect number.");
		welcomeMessagePrint();
	}

	document.getElementById('first-side').style.backgroundColor = firstColor;
	document.getElementById('second-side').style.backgroundColor = secondColor;
	document.getElementById('third-side').style.backgroundColor = thirdColor;
}