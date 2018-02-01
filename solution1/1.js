// console.log("hello");

var submit = document.getElementById("submit");
submit.addEventListener("click", solution);

function solution() {

    var name = document.getElementById("name");
    var ans = document.getElementById("answerBox");

    if (name.value !== "") {
        function answer() {
            ans.innerHTML = "Greetings " + name.value + " welcome to Codi";
        }
        answer();
    }
}