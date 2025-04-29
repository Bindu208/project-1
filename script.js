let display = document.getElementById("display");

// Append characters (numbers/operators) to the display
function append(char) {
  display.innerText += char;
}

// Clear the entire display
function clearAll() {
  display.innerText = "";
}

// Remove the last character from the display
function backspace() {
  display.innerText = display.innerText.slice(0, -1);
}

// Evaluate the expression in the display
function calculate() {
  try {
    display.innerText = eval(display.innerText);
  } catch (e) {
    display.innerText = "Error";
  }
}
