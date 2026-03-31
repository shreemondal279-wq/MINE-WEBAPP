document.addEventListener("DOMContentLoaded", function () {

  loadHistory();

});

function solveDoubt() {
  let question = document.getElementById("question").value;

  if (!question) {
    document.getElementById("answerBox").innerText = "Enter a question!";
    return;
  }

  let answer = "🤖 AI Answer: " + reallogicanswer;

  document.getElementById("answerBox").innerText = answer;

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

function loadHistory() {
  let history = JSON.parse(localStorage.getItem("history")) || [];
  history.forEach(q => addToHistory(q));
}

function toggleTheme() {
  let body = document.body;

  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    body.classList.add("light");
  } else {
    body.classList.remove("light");
    body.classList.add("dark");
  }
}
