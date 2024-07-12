function checkAnswer() {
    // 1 This is the correct answer
    const correctAnswer = "4";

    // 2 Retrieving the user's answer
    const selectedAns = document.querySelector('input[name="quiz"]:checked');
    const userAnswer = selectedAns ? selectedAns.value : null;

    // 2 Get the feedback element
    const feedback = document.getElementById('feedback');

    // 3 Comparing the user's answer with the correct answer and provide feedback
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
        feedback.style.color = "green";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
        feedback.style.color = "red";
    }
}

// Adding event listener to the "Submit Answer" button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);