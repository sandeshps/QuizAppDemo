$(document).ready(function () {
    $(".modal").modal('show');
    var questions = ["Who invented steam engine ? ", "Who wrote C++ ?", "Who is the first governor of India ? "];
    options = [
        ['James Watt', 'Thomas Alva Edison', 'Johny lever'],
        ['James Gosling', 'Bjarne Stroustroup', 'Dennis Ritchie'],
        ['Warren Hastings', 'Mount Batton', 'Rajagopalachari']
    ];
    answers = ['James Watt', 'Bjarne Stroustroup', 'Warren Hastings'];
    $(".modal-footer button").on('click', function () {
        var userName = $("#txtUsername").val();
        displayName(userName);
        displayQuestions(questions, options)
    });
    // Diplay the name of the user
    function displayName(name) {
        $("<h3> Welcome " + name + "</h3>").appendTo("#displayName");
    }

    // Display the questions with options
    function displayQuestions(questionsArray, optionsArray) {
        var questions = questionsArray;
        var options = optionsArray;
        for (var i = 0; i < 3; i++) { // Insert 3 questions     
            $("<h4>" + questions[i] + "</h4>").appendTo("#question" + (i + 1)); // Insert the particular question
            for (radioIndex = 0; radioIndex < 3; radioIndex++) { // Create 3 dynamic radio buttons for each question
                if (radioIndex == 0) {
                    $("<input type='radio' class='rdbOption' name='option" + i + "' value='" + options[i][radioIndex] + "'>" + options[i][radioIndex] + "</input> </br>").appendTo("#question" + (i + 1));
                }
                if (radioIndex == 1) {
                    $("<input type='radio' class='rdbOption' name='option" + i + "' value='" + options[i][radioIndex] + "'>" + options[i][radioIndex] + "</input></br>").appendTo("#question" + (i + 1));
                }
                if (radioIndex == 2) {
                    $("<input type='radio' class='rdbOption' name='option" + i + "' value='" + options[i][radioIndex] + "'>" + options[i][radioIndex] + "</input></br>").appendTo("#question" + (i + 1));
                }
            } // End of inner loop
        } // End of main loop 
        $("<button id='submit' class='btn-primary'>Submit</button>").appendTo('#question' + i); // Insert "Submit" button at the end
        var count = 0;
        $("#submit")
            .click(function () {
            for (i = 0; i < 3; i++) {
                for (j = 0; j < 3; j++) {
                    if (userAnswers[i] === answers[j]) { // Correct answer
                        count++;
                    }
                }
            }
            $("<p> Your score : " + count + "</p>").appendTo("#result");
            $("#submit").attr("disabled", "disabled"); // Disable the button
        });

        userAnswers = []; // Store the answers chosen by the user
        $('.rdbOption') // select the radio by its class
        .change(function () { // bind a function to the change event
            if ($(this).is(":checked")) { // check if the radio is checked
                var category;
                var value = $(this).val(); // retrieve the value
                /* This part will store one single value from each question.
                   The last checked value will be stored */
                for (index = 0; index < 3; index++) {
                    for (inner = 0; inner < 3; inner++) {
                        if (value === options[index][inner]) {
                            userAnswers[index] = value;
                        }
                    }
                }
            }
        });

    }
});