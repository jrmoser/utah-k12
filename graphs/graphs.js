/**
 * Created by gabedriggs1 on 11/18/15.
 */
<<<<<<< Updated upstream
function isEqual(){
    var answer = document.getElementById("eq").value;
    if (answer == "f(x)=2x"){
        alert("Nice you got it right!");
    }
    else
    {
        alert("Sorry! Try again :)");
    }
}
function isEqual2(){
    var answer2 = document.getElementById("eq1").value;
    if (answer2 == "f(x)=3x"){
=======

function isEqual(){
    var answer = $("#eq").val();
    if (answer == "f(x)=2x"){
>>>>>>> Stashed changes
        alert("Nice you got it right!");
    }
    else
    {
        alert("Sorry! Try again :)");
    }
}
function isEqual2(){
    var answer2 = $("#eq1").val();
    if (answer2 == "f(x)=3x"){
        alert("Nice you got it right!");
    }
    else
    {
        alert("Sorry! Try again :)");
    }
}