// variable to hold input  id
var celsius = document.getElementById("celsius");
var fahrenheit = document.getElementById("fahrenheit");

//code for celsius to fahrenheit conversion
celsius.addEventListener("input", function () {
  let c = this.value;
  let f = c * (9 / 5) + 32;

  //   logic to show only 4 decimal point
  if (!Number.isInteger(f)) {
    f = f.toFixed(4);
  }
  fahrenheit.value = f;
});

//code for fahrenheit to celsius  conversion
fahrenheit.addEventListener("input", function () {
  let f = this.value;
  let c = (f - 32) * (5 / 9);

  //   logic to show only 4 decimal point
  if (!Number.isInteger(c)) {
    c = c.toFixed(4);
  }
  celsius.value = c;
});
