input = document.getElementById("input");
buttons = document.querySelectorAll("button");
let screenValue = "";
buttons.forEach(function (key) {
  key.addEventListener("click", function (e) {
    buttonText = e.target.innerText;
    console.log(buttonText);
    if (buttonText == "X") {
      buttonText = "*";
      screenValue += buttonText;
      input.value = screenValue;
    } else if (buttonText == "AC") {
      screenValue = "";
      input.value = screenValue;
    } else if (buttonText == "=") {
      input.value = eval(screenValue);
    } else {
      screenValue += buttonText;
      input.value = screenValue;
    }
  });
});
