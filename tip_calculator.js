amount_handler();
function tip_increment() {
  document.getElementById("tip-input").stepUp();
  amount_handler();
}
function tip_decrement() {
  document.getElementById("tip-input").stepDown();
  amount_handler();
}
function people_increment() {
  document.getElementById("people-input").stepUp();
  amount_handler();
}
function people_decrement() {
  document.getElementById("people-input").stepDown();
  amount_handler();
}

function amount_handler() {
  var bill = document.getElementsByName("bill")[0].value;
  var tip = document.getElementsByName("tip")[0].value;
  var people = document.getElementsByName("people")[0].value;
  var tip_amount = (bill * tip) / (100 * people);
  var total_amount = bill / people + tip_amount;
  document.getElementById("tip-amount").innerHTML = "$" + tip_amount.toFixed(2);
  document.getElementById("total-amount").innerHTML =
    "$" + total_amount.toFixed(2);
}
