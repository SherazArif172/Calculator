const buttons = document.querySelectorAll(".inpt");
const screen = document.querySelector("#spaceI");

let finalValue = "";

for (const button of buttons) {
  button.addEventListener("click", (e) => {
    const buttonValue = e.target.textContent;
    finalValue = finalValue + buttonValue;
    screen.value = finalValue;
  });
}

const equalBtn = document.querySelector(".equalbtn");
equalBtn.addEventListener("click", () => {
  const calculatedValue = eval(finalValue);
  finalValue = calculatedValue + "";
  screen.value = finalValue;
});

const clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", () => {
  finalValue = "";
  screen.value = finalValue;
});

const delBtn = document.querySelector(".delete");
delBtn.addEventListener("click", () => {
  const ourStringArray = finalValue.split("");
  ourStringArray.pop();
  const newValue = ourStringArray.join("");
  finalValue = newValue;

  screen.value = finalValue;
});
