document.addEventListener("DOMContentLoaded", function () {
  loadHistory();
});

function solveDoubt() {
  let question = document.getElementById("question").value;

  if (!question) {
    document.getElementById("answerBox").innerText = "Enter a question!";
    return;
  }

  let answer = getAnswer(question);

  document.getElementById("answerBox").innerText = "🤖 AI Answer: " + answer;

  let history = JSON.parse(localStorage.getItem("history")) || [];
  history.push(question);
  localStorage.setItem("history", JSON.stringify(history));

  addToHistory(question);
}

function getAnswer(q) {
  try {
    // Remove spaces
    let cleanQ = q.replace(/\s/g, "");

    // Check if it's math
    if (/^[0-9+\-*/().]+$/.test(cleanQ)) {
      let result = eval(cleanQ);
      return result;
    }

    // If question contains '='
    if (cleanQ.includes("=")) {
      let expression = cleanQ.split("=")[0];
      let result = eval(expression);
      return result;
    }

    // Default response
    return "I can solve math like 85+5. Try that!";
    
  } catch (error) {
    return "Sorry, I couldn't understand.";
  }
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
