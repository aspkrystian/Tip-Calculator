const bill = document.querySelector(".billIn");
const btn5 = document.querySelector(".tip5");
const btn10 = document.querySelector(".tip10");
const btn15 = document.querySelector(".tip15");
const btn25 = document.querySelector(".tip25");
const btn50 = document.querySelector(".tip50");
const btnCustom = document.querySelector(".customIn");
const number = document.querySelector(".numIn");
const tipAmountOutput = document.querySelector(".tipAmount");
const totalAmountOutput = document.querySelector(".totalAmount");

function tip5() {
  document.getElementById("tipAmount").innerHTML =
    "$" + ((bill.value * 0.05) / number.value).toFixed(2);
  document.getElementById("totalAmount").innerHTML =
    "$" + (bill.value / number.value).toFixed(2);
}
btn5.addEventListener("click", function () {
  tip5();
  btn5.style.background = "hsl(172, 67%, 45%)";
});

function tip10() {
  document.getElementById("tipAmount").innerHTML =
    "$" + ((bill.value * 0.1) / number.value).toFixed(2);
  document.getElementById("totalAmount").innerHTML =
    "$" + (bill.value / number.value).toFixed(2);
}
btn10.addEventListener("click", function () {
  tip10();
  btn10.style.background = "hsl(172, 67%, 45%)";
});

function tip15() {
  document.getElementById("tipAmount").innerHTML =
    "$" + ((bill.value * 0.15) / number.value).toFixed(2);
  document.getElementById("totalAmount").innerHTML =
    "$" + (bill.value / number.value).toFixed(2);
}
btn15.addEventListener("click", function () {
  tip15();
  btn15.style.background = "hsl(172, 67%, 45%)";
});

function tip25() {
  document.getElementById("tipAmount").innerHTML =
    "$" + ((bill.value * 0.25) / number.value).toFixed(2);
  document.getElementById("totalAmount").innerHTML =
    "$" + (bill.value / number.value).toFixed(2);
}
btn25.addEventListener("click", function () {
  tip25();
  btn25.style.background = "hsl(172, 67%, 45%)";
});

function tip50() {
  document.getElementById("tipAmount").innerHTML =
    "$" + ((bill.value * 0.5) / number.value).toFixed(2);
  document.getElementById("totalAmount").innerHTML =
    "$" + (bill.value / number.value).toFixed(2);
}
btn50.addEventListener("click", function () {
  tip50();
  btn50.style.background = "hsl(172, 67%, 45%)";
});

function custom() {
  if (btnCustom.value > 0) {
    document.getElementById("tipAmount").innerHTML =
      "$" + ((bill.value * btnCustom.value * 0.01) / number.value).toFixed(2);
    document.getElementById("totalAmount").innerHTML =
      "$" + (bill.value / number.value).toFixed(2);
  }
}
btnCustom.addEventListener("click", function () {
  custom();
});
