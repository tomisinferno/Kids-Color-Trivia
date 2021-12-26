/*
##################################################
Author - Oluwatomi
Purpose - Custom JS for creating requested functionalities
Instructor - Joey Kitson
Dependencies - Yes
References - www.w3schools.com & www.stackoverflow.com
Since - 15/03/2021
##################################################
*/

//event listener
window.addEventListener("load", init, false);

function init(){
    document.getElementById("submitBtn").addEventListener("click", main)
}

//Idea gotten from stackoverflow.com
let q1Err = q2Err = q3Err = q4Err = q5Err = q6Err = q7Err = true;

//A main function that processes the program
function main() {
    test()
    checkAnswer()
}

//Function checking if any input has been selected
function test() {
    if (document.getElementById("q1").value === "") {
        error(document.getElementById("error1"));
    } else {
        success(document.getElementById("error1"))
        q1Err = false;
    }
    if (document.getElementById("q2").value === "") {
        error(document.getElementById("error2"));
    } else {
        success(document.getElementById("error2"));
        q2Err = false;
    }

    if (document.getElementById("q3").value === "Please Select") {
        error(document.getElementById("error3"));
    } else {
        success(document.getElementById("error3"));
        q3Err = false;
    }

    if (document.getElementById("q4").value === "Please Select") {
        error(document.getElementById("error4"));
    } else {
        success(document.getElementById("error4"));
        q4Err = false;
    }

    if (!(document.getElementById("q5_1").checked || document.getElementById("q5_2").checked ||
        document.getElementById("q5_3").checked || document.getElementById("q5_4").checked)) {
        error(document.getElementById("error5"));
    } else {
        success(document.getElementById("error5"));
        q5Err = false;
    }
    if (!(document.getElementById("q6_1").checked || document.getElementById("q6_2").checked ||
        document.getElementById("q6_3").checked || document.getElementById("q6_4").checked)) {
        error(document.getElementById("error6"));
    } else {
        success(document.getElementById("error6"));
        q6Err = false;
    }
    if (!(document.getElementById("q7_1").checked || document.getElementById("q7_2").checked ||
        document.getElementById("q7_3").checked || document.getElementById("q7_4").checked || document.getElementById("q7_5").checked)) {
        error(document.getElementById("error7"));
    } else {
        success(document.getElementById("error7"));
        q7Err = false;
    }
}

//Function that releases error message
function error(input) {
    input.innerHTML = "No Color Yet?";
}
//Function that removes error message if input exist
function success(input) {
    input.innerHTML = "";
}

function checkAnswer() {
    //A gate that blocks if any field is em[ty
    if ((q1Err || q2Err || q3Err || q4Err || q5Err || q6Err || q7Err) === true) {
        return false;
    } else {
        //Declaring variables
        let q1Ans = document.getElementById("q1").value.trim().toLowerCase()
        let q2Ans = document.getElementById("q2").value.trim().toLowerCase()
        let q3Ans = document.getElementById("q3").value.trim().toLowerCase()
        let q4Ans = document.getElementById("q4").value.trim().toLowerCase()
        let q5_2 = document.getElementById("q5_2").checked
        let q6_1 = document.getElementById("q6_1").checked
        let q7_1 = document.getElementById("q7_1").checked
        let q7_2 = document.getElementById("q7_2").checked
        let q7_3 = document.getElementById("q7_3").checked
        let q7_4 = document.getElementById("q7_4").checked
        let q7_5 = document.getElementById("q7_5").checked
        let result = document.getElementById("outputDiv")
        let total = 7;
        let score = 0;

        //Checking Input
        if ((q1Ans) === "red")
            score ++;
        if ((q2Ans) === "white")
            score ++;
        if ((q3Ans) === "green")
            score ++;
        if ((q4Ans) === "blue")
            score ++;
        if (q5_2)
            score ++;
        if (q6_1)
            score ++;
        if (q7_1 && !q7_2 && q7_3 && q7_4 && !q7_5)
            score ++;

        //Calculating score
        let scorePercent = ((score / total) * 100)
        scorePercent = Math.round(scorePercent * 100) / 100

        //Adding Colors to output. Gotten from www.stackoverflow.com
        if (scorePercent >= 0 && scorePercent <= 50)
            result.style.color = "red"
        else if (scorePercent > 50 && scorePercent < 80)
            result.style.color = "orange"
        else if (scorePercent >= 80)
            result.style.color = "green"

        result.innerHTML = "You got " + scorePercent + "% of the questions correct!";

        //Uncomment below to add a reset form function
        //document.getElementById("formFilled").reset();
    }

}//hints hard coded
function hint_1() {
    alert("The first color on the RAINBOW")
    return false;
}
function hint_2() {
    alert("MILK!!!")
    return false;
}
function hint_3() {
    alert("Color of most LEAVES")
    return false;
}
function hint_4() {
    alert("Look up to the SKY!")
    return false;
}
function hint_5() {
    alert("Sometimes referred to as VIOLET")
    return false;
}
function hint_6() {
    alert("MINT")
    return false;
}
function hint_7() {
    alert("rEAD yOUR bOOK")
    return false;
}