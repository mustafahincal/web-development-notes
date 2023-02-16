const testButton = document.querySelector("#test-button");
const input = document.querySelector("#test-input");

let test = input.value;
testButton.addEventListener("click", function () {
  console.log(test);
});
