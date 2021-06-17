var colors = [
"rgb(255, 0, 0)",
"rgb(255, 255, 0)",
"rgb(0, 255, 0)",
"rgb(0, 255, 255)",
"rgb(0, 0, 255)",
"rgb(255, 0, 255)",
]
var numSqaures = 6;
var colors = generateRandomColors(numSqaures);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	setUpModeButtons();
	setUpSquares();
	reset();
} 
    function setUpModeButtons(){
	//mode buttons event listeners
	for (var i = 0; i < modeButtons.length; i++) {
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
        this.textContent === "Easy" ? numSqaures = 3 : numSqaures = 6;
		//Another way to run if is given above called ternary operators
        // if (this.textContent === "Easy") {
        // 	numSqaures = 3;
        // }else{
        // 	numSqaures = 6;
        // }
        reset();
	});
}
}

function setUpSquares(){
         for (var i = 0; i < squares.length; i++) {
	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		//compare color to pickedColor
		if (clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!"
			changeColors(clickedColor);
			resetButton.textContent = "Play Again?"
			h1.style.backgroundColor = clickedColor;
		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again!"
		   }
	    });
      }
        reset();
} 

        

function reset(){
        //generate all new colors
	    colors = generateRandomColors(numSqaures);
	    //pick a new random color from array
	    pickedColor = pickColor();
	    //change colorDisplay to match picked color
	    colorDisplay.textContent = pickedColor;
	    resetButton.textContent = "New Colors";

	    messageDisplay.textContent = "";
	    //change color of squares 
	    for (var i = 0; i < squares.length; i++) {
	    	if (colors[i]) {
	    		squares[i].style.display = "block";
               squares[i].style.backgroundColor=colors[i];
	    	} else {
	    		squares[i].style.display="none";
	    	}
		
	   }
	  h1.style.backgroundColor = "steelblue"; 
}

// easyBtn.addEventListener("click", function(){
// 	hardBtn.classList.remove("selected");
// 	easyBtn.classList.add("selected");
// 	numSqaures = 3;
// 	colors = generateRandomColors(numSqaures);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for (var i = 0; i < squares.length; i++) {
// 		if (colors[i]) {
// 			squares[i].style.backgroundColor = colors[i];
// 		} else {
// 			squares[i].style.display = "none";
// 		}
// 	}
// })

// hardBtn.addEventListener("click",function(){
// 	easyBtn.classList.remove("selected");
// 	hardBtn.classList.add("selected");
// 	numSqaures =6;
// 	colors = generateRandomColors(numSqaures);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for (var i = 0; i < squares.length; i++) {
// 		squares[i].style.backgroundColor = colors[i];
// 	    squares[i].style.display = "block";
// 	}
// })

resetButton.addEventListener("click",function(){
	reset();
})

colorDisplay.textContent = pickedColor;



function changeColors(color){
	//loop through all squares
	for(var i =0; i < squares.length; i++){
		squares[i].style.backgroundColor  =color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];  
}

function generateRandomColors(num){
	//make an array
	var arr = [];
	//repeat num times
	for (var i = 0; i < num; i++) {
		//get random color and push into arr
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor(){
	//pick a "red" from 0-255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0-255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0-255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " +b + ")";
}