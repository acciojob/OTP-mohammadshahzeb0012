//your JS code here. If required.

const codeContainer = document.querySelector(".code-container");
const numberOfInputs = 8;
let lastEnteredInputElement = null;

function onInput(event) {
    const currentElement = event.target;
    console.log("event triggered");
    if(currentElement.value){
        lastEnteredInputElement = currentElement;
        currentElement.nextElementSibling && currentElement.nextElementSibling.focus()
    }

}

function onBackSpace(e) {

    e.target.value = "";
    e.target.previousElementSibling && e.target.previousElementSibling.focus();
}

function onEnter(e) {
    if (e.target.value) {
        e.target.nextElementSibling && e.target.nextElementSibling.focus();
    }
}

function onKeyUp(e) {
    if (e.key === "Enter") {
        onEnter(e);
    }
    else if (e.key === "Backspace") {
        onBackSpace(e);
    }
}

for (let i = 1; i <= numberOfInputs; i++) {
    const input = document.createElement("input");
    input.className = "code";
    input.maxLength = 1;

    input.addEventListener("input", onInput);
    input.addEventListener("keyup", onKeyUp);

    codeContainer.appendChild(input);
}