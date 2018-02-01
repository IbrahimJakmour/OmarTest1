// console.log("hello");

var submit = document.getElementById("submit");
submit.addEventListener("click", solution);

function solution() {

    var number = document.getElementById("number");
    var ans = document.getElementById("answerBox");

    if (number.value !== "") {

        function calculate() {
            var sum = 0;
            var num = number.value;
            for (var i = 1; i <= num; i++) {
                sum += i;
            }
            ans.innerHTML = "Sum is " + sum;
        }
        calculate();

    }
}