$(document).ready(function () {
    //hide the quiz and submit button when the page loads
    $(".the-quiz").hide();
    $(".btn-danger").hide();

    //====== global variables ========= 
    var correctAnswers = ["d", "j", "k", "q", "x"];
    var userAnswers = [];

    //initial click of the begin button, displays the quiz and changes the begin button to the submission button
    $(".btn-secondary").on("click", function () {
        $("#welcome-instructions").hide();
        $(".btn-danger").show();
        $(".the-quiz").show();
        hideStartButton();
    });
//function to hide the start button when taking the quiz
    function hideStartButton() {
        $(".btn-secondary").hide();
    }
//function to hide the submit button after taking the quiz
    function hideSubmitButton() {
        $(".btn-danger").hide();
    }
//function to submit the quiz
    $(".btn-danger").on("click", function () {
        $(".the-quiz").hide();
        hideSubmitButton();
        scoreQuiz();
        showResults();
    });

//function to score the quiz
    function scoreQuiz(){
        //this is the function to log the user's answers
        $('input:checked').each(function(){
            userAnswers.push($(this).val());
            });
            console.log(userAnswers); 
    }
    
//function to show the results    
    function showResults() {
        $("#game-results").show();
        $("#un-ans").html("Unanswered Questions: " + (val = (correctAnswers.length - userAnswers.length)));
    }




    


});

