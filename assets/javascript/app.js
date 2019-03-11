$(document).ready(function () {
    //hide the quiz and submit button when the page loads
    $(".the-quiz").hide();
    $(".btn-danger").hide();

    //====== global variables ========= 
    var correctAnswers = ["d", "j", "k", "q", "x"];
    var userAnswers = [];
    var score = 0;
    var incorrectAnswers = 0;
    var myTimeout;

    //variables for count down clock
    var clockRunning = false;
    var timer2 = "1:00";

    //====== functions ========= 

    //functions to set up the time when the page will submit if user takes longer than designated time
    function myTimeoutFunction() {
        mytimeout = setTimeout(function () { submit(); }, 61 * 1000);
    }

    function myTimeoutStop() {
        clearTimeout(myTimeout);
    }

    //initial on-click of the begin button, displays the quiz and changes the begin button to the submission button
    $(".btn-primary").on("click", function () {
        $("#welcome-instructions").hide();
        $(".btn-danger").show();
        $(".the-quiz").show();
        hideStartButton();
        myTimeoutFunction();
        $("#display").text("1:30");
        startTheCountDown();
    });

    //function to hide the start button when taking the quiz
    function hideStartButton() {
        $(".btn-primary").hide();
    }

    //function to hide the submit button after taking the quiz
    function hideSubmitButton() {
        $(".btn-danger").hide();
    }

    //on-click: to submit the quiz
    $(".btn-danger").on("click", function () {
        submit();
    });

    function submit() {
        $(".the-quiz").hide();
        hideSubmitButton();
        scoreQuiz();
        showResults();
        myTimeoutStop();
    }

    //function to score the quiz
    function scoreQuiz() {
        //this is the function to log the user's answers (storing the value of the radio buttons)
        $('input:checked').each(function () {
            userAnswers.push($(this).val());
        });
        //function to compare the correctAnswers array with the userAnswers array, if uswerAnswers match they get credit for a correct answer if not an incorrect answer is recorded.
        for (var i = 0; i < userAnswers.length; i++) {
            if (userAnswers[i] === "d" || userAnswers[i] === "j" || userAnswers[i] === "k" || userAnswers[i] === "q" || userAnswers[i] === "x") {
                score++;
            }
            else {
                incorrectAnswers++;
            }
        }
    }

    //function to show the results    
    function showResults() {
        $("#game-results").show();
        $("#message-to-user").html("<h3>All Done!</h3>");
        $("#correct-ans").html("Correct Answers: " + score);
        //below is how the unanswered questions category is calculated, using the length of the arrays
        $("#un-ans").html("Unanswered Questions: " + (val = (correctAnswers.length - userAnswers.length)));
        $("#incorrect-ans").html("Incorrect Answers: " + incorrectAnswers);
    }

    //function to start countdown clock
    function startTheCountDown() {
        if (!clockRunning) {
            clockRunning = true;

            var interval = setInterval(function () {
                var timer = timer2.split(':');
                var minutes = parseInt(timer[0], 10);
                var seconds = parseInt(timer[1], 10);
                --seconds;
                minutes = (seconds < 0) ? --minutes : minutes;
                if (minutes < 0) clearInterval(interval);
                seconds = (seconds < 0) ? 59 : seconds;
                seconds = (seconds < 10) ? '0' + seconds : seconds;
                $('#display').text(minutes + ':' + seconds);
                timer2 = minutes + ':' + seconds;
            }, 1000);
        }
    }

   

});

