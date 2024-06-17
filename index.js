const display = document.getElementById("display");

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    // calculating the string version of the given equation and returning the mathematical answer with eval()
    display.value = eval(display.value);
  } catch (error) {
    // displaying an error message when the given equation is incomplete such as (74:)
    display.value = "Error";
    // clearing the error after 3 seconds so user can enter a new and possibly correct equation
    setTimeout(() => {
      clearDisplay();
    }, 3000);
  }
}
