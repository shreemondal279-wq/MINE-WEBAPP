// Load saved history
window.onload = function () {
  document.body.classList.add("light");

  let history = JSON.parse(localStorage.getItem("history")) || [];
  history.forEach(item => addToHistory(item));
};

function solveDoubt() {
  let question = document.getElementById("question").value;

  if (question === "") {
    document.getElementById("answerBox").innerText = "Enter a question!";
    return;
  }

  let answer = "🤖 AI Answer: This is a response for: " + question;

  document.getElementById("answerBox").innerText = answer;

  // Save to history
  let history = JSON.parse(localStorage.getItem("history")) || [];
  history.push(question);
  localStorage.setItem("history", JSON.stringify(history));

  addToHistory(question);
}

function addToHistory(question) {
  let li = document.createElement("li");
  li.innerText = question;
  document.getElementById("historyList").appendChild(li);
}

// Dark / Light Theme Toggle
function toggleTheme() {
  if (document.body.classList.contains("dark")) {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
  } else {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
  }
}
