const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value); 
    }
    catch(error){
        display.value = "Error";
    }
}

function toggleSign(){
    display.value = -parseFloat(display.value);
}

function findPercentage(){
    display.value = display.value / 100;
}

const titleText = "Melodulator";
let index = 0;
const titleElement = document.getElementById("title");

function typeTitle() {
    if (index < titleText.length) {
        titleElement.textContent += titleText.charAt(index);
        index++;
        setTimeout(typeTitle, 150); // Adjust speed as needed
    }
}

// Start the animation when page loads
window.addEventListener('load', typeTitle);
