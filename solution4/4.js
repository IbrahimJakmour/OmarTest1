// console.log("hello");

var submit = document.getElementById("submit");
submit.addEventListener("click", solution);

function solution() {

    var number = document.getElementById("number");
    var ans = document.getElementById("answerBox");
    var num = number.value;

    if (num !== "") {
        if (num % 3 == 0 || num % 5 == 0) {
            function calculate() {
                var sum = 0;
                for (var i = 1; i <= num; i++) {
                    sum += i;
                }
                ans.innerHTML = "Sum is " + sum;
            }
            calculate();

        } else {
            ans.innerHTML = "Number is not divisable by 3 or 5";
        }
    }
}