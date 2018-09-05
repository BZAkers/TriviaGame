$(document).ready(function () {
    var time = 30;
    var correct = 0;
    var incorrect = 0;
    var Selected = false;
    var ticker;

    var question = ["Who, according to myth, founded Rome?", "The Romans were heavily influenced by the Greek's", "Upper class in the Roman Empire and was a small group of wealthy land owners.", "Aqueducts...", "The first Roman emperor was..."];

    var answerOne = ["Romulus and Remus", "religion", "Patricians", "is a system of roads", "Julius Caesar."];
    var answerTwo = ["Julius Caesar", "architecture", "Plebeians", "carry water from distant lakes/rivers to cities", "Octavius"];
    var answerThree = ["Hannibal", "alphabet", "Emperors", "are fancy water slides", "Constantine I."];
    var answerFour = ["Armenius", "all of the above", "Teachers", "are hydro motors", "Theodosius I."];

    var Answer = ["Romulus and Remus", "all of the above", "Patricians", "carry water from distant lakes/rivers to cities", "Octavius"];

    var track = 0;

    function startTrivia() {
        showAnswerBox();
        correct = 0;
        incorrect = 0;
        var track = 0;
    }

    function hideAnswerBox() {
        $("#answerBox").hide();
        $("#answerOne").hide();
        $("#answerTwo").hide();
        $("#answerThree").hide();
        $("#answerFour").hide();
    }

    function showAnswerBox() {
        $("#answerBox").show();
        $("#answerOne").show();
        $("#answerTwo").show();
        $("#answerThree").show();
        $("#answerFour").show();
    }

    function hideresultBox() {
        $("#resultBox").hide();
        $("#resultOne").hide();
        $("#resultTwo").hide();
        $("#resultThree").hide();

    }

    function showResultBox() {
        $("#resultBox").show();
        $("#resultOne").show();
        $("#resultTwo").show();
        $("#resultThree").show();
    }

    function displayQuestion() {
        hideresultBox();
        $("#display").html(question[track]);
        $("#answerOne").html(answerOne[track]);
        $("#answerTwo").html(answerTwo[track]);
        $("#answerThree").html(answerThree[track]);
        $("#answerFour").html(answerFour[track]);
        showAnswerBox();
        $("#answerOne").on("click", checkAnswer)
        $("#answerTwo").on("click", checkAnswer)
        $("#answerThree").on("click", checkAnswer)
        $("#answerFour").on("click", checkAnswer)
    }
    $("#answerOne").on("click", checkAnswer)
    $("#answerTwo").on("click", checkAnswer)
    $("#answerThree").on("click", checkAnswer)
    $("#answerFour").on("click", checkAnswer)

    /* This answer checker is a simplified recreation of one I found online */
    /* isSelected? */

    function checkAnswer() {
        hideAnswerBox();
        if ($(this).text() === answer[track]) {
            stopTime();
            Selected = true;
            $("#display").show();
            $("#display").html("You got it, the answer is: " + answer[track]);
            displayImage();
            correct++;
            track++;
        }
        else {
            stopTime();
            Selected = true;
            $("#display").show();
            $("#display").html("Incorrect, the correct answer is : " + answer[track]);
            displayImage();
            incorrect++;
            track++;
        }

        checkGameEnd();
    }

    function checkGameEnd() {
        if (track === question.length) {
            $("#timer").hide();
            showResults();
            track = 0;
            $("#display").show();
            $("#display").on("click", function () {
                resetResults();
                startGame();
            });
        }
    }

    function resetTime() {
        time = 30;
    }

    function displayTime() {
        time--;
        $("#timer").html("Time left: " + time);

        if (time <= 0) {
            hideHolders();
            stopTime();
            $("#answer-holder").show();
            $("#answer-holder").html("Times up, the answer is: " + answer[track]);
            displayImage();
            incorrect++;
            track++;
            checkGameEnd();
        }
    }

    function startTime() {
        clearInterval(ticker);
        ticker = setInterval(displayTime, 1000);
    }
    function stopTime() {
        clearInterval(ticker);
        resetTime();
        if (track < question.length - 1) {
            setTimeout(startTime, 2000);
            setTimeout(displayQuestion, 3000);
        }
    }

    resetTime();

    function displayImage() {
        if (track === 0) {
            $("#image").show();
            $("#image").html('<img src="https://via.placeholder.com/300x300">');
        }
        else if (track === 1) {
            $("#image").show();
            $("#image").html('<img src="https://via.placeholder.com/300x300">');
        }
        else if (track === 2) {
            $("#image").show();
            $("#image").html('<img src="https://via.placeholder.com/300x300">');
        }
        else if (track === 3) {
            $("#image").show();
            $("#image").html('<img src="https://via.placeholder.com/300x300">');
        }
        else if (track === 4) {
            $("#image").show();
            $("#image").html('<img src="https://via.placeholder.com/300x300">');
        }
        else if (track === 5) {
            $("#image").show();
            $("#image").html('<img src="https://via.placeholder.com/300x300">');
        }
        else if (track === 6) {
            $("#image").show();
            $("#image").html('<img src="https://via.placeholder.com/300x300">');
        }
        else if (track === 7) {
            $("#image").show();
            $("#image").html('<img src="https://via.placeholder.com/300x300">');
        }
    }

    function showResults() {
        $("#resultOne").show();
        $("#resultOne").html("Correct: " + correct);
        $("#resultTwo").show();
        $("#resultTwo").html("Incorrect: " + incorrect);
        $("#resultThree").show();
        $("#resultThree").html("Click Start to play again!");
    }

    function resetResults() {
        correct = 0;
        incorrect = 0;
    }

    function startGame() {
        $(".display").hide();
        startTime();
        displayQuestion();
    }

    $("#display").on("click", function () {
        startGame();
    });

});