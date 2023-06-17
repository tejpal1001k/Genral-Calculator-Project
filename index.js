// function appendToResult(value) {
//     var result = document.getElementById("result");
//     result.value += value;
//   }

//   function calculateResult() {
//     var result = document.getElementById("result");
//     result.value = eval(result.value);
//   }

//   function clearResult() {
//     var result = document.getElementById("result");
//     result.value = "";
//   }

var result = document.getElementById("result");
function append(value){
    result.value+=value;
}
function calculate() {
    result.value = eval(result.value);
  }
  function clearResult() {
    result.value = "";
  }