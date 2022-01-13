
$("#btnSend").click(function () {
    var assignment = $("#assignments").val();
    var groupprojects = $("#groupprojects").val();
    var quizzes = $("#quizzes").val();
    var exams = $("#exams").val();
    var intex = $("#intex").val();
    var total = intex * .1 + exams * .2 + quizzes * .1 + groupprojects * .05 + assignment * .55;
    var gradeletter = "";
    if (total >= 94) {
        gradeletter = "A";
    }
    else if (total >= 90) {
        gradeletter = "A-";
    }
    else if (total >= 87) {
        gradeletter = "B+";
    }
    else if (total >= 84) {
        gradeletter = "B";
    }
    else if (total >= 80) {
        gradeletter = "B-";
    }
    else if (total >= 77) {
        gradeletter = "C+";
    }
    else if (total >= 74) {
        gradeletter = "C";
    }
    else if (total >= 70) {
        gradeletter = "C-";
    }
    else if (total >= 67) {
        gradeletter = "D+";
    }
    else if (total >= 64) {
        gradeletter = "D";
    }
    else if (total >= 60) {
        gradeletter = "D-";
    }
    else if (total < 60) {
        gradeletter = "E"
    }

    alert("Grade: " + total.toFixed(2) + "% " + gradeletter.toString());
});