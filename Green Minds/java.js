const questions = [
    "Little interest or pleasure in doing things?",
    "Feeling down, depressed, or hopeless?",
    "Trouble falling or staying asleep, or sleeping too much?",
    "Feeling tired or having little energy?",
    "Poor appetite or overeating?",
    "Feeling bad about yourself — or that you are a failure or have let yourself or your family down?",
    "Trouble concentrating on things, such as reading or watching TV?",
    "Moving or speaking so slowly that other people could have noticed? Or being so fidgety or restless that you were moving a lot more than usual?",
    "Thoughts that you would be better off dead or of hurting yourself in some way?"
  ];
  const options = ["0 - Not at all", "1 - Several days", "2 - More than half the days", "3 - Nearly every day"];
  const questionsDiv = document.getElementById('questions');
  questions.forEach((q, i) => {
    const div = document.createElement('div');
    div.classList.add('question');
    div.innerHTML = <strong>${i + 1}. ${q}</strong>;
    options.forEach((opt, j) => {
      div.innerHTML += `
        <label>
          <input type="radio" name="q${i}" value="${j}" required />
          ${opt}
        </label>`;
    });
    questionsDiv.appendChild(div);
  });

  document.getElementById('quizForm').addEventListener('submit', function(e) {
    e.preventDefault();
    let score = 0;
    for (let i = 0; i < questions.length; i++) {
      const val = document.querySelector(`input[name="q${i}"]:checked`).value;
      score += parseInt(val);
    }
    let feedback = "";
    if (score <= 4) feedback = "Minimal or no depression.";
    else if (score <= 9) feedback = "Mild depression.";
    else if (score <= 14) feedback = "Moderate depression.";
    else if (score <= 19) feedback = "Moderately severe depression.";
    else feedback = "Severe depression.";

    document.getElementById('result').innerText =' Your Score: ${score} – ${feedback}';
  });
