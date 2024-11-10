let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculateResult(buttons) {
    if (buttons > 0) {
      return "The number is positive.";
    } else if (buttons < 0) {
      return "The number is negative.";
    } else {
      return "The number is zero.";
    }
  }