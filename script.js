function solveDoubt() {
  let question = document.getElementById("question").value;

  if (question === "") {
    document.getElementById("answerBox").innerText = "Please enter a question!";
    return;
  }

  // Demo AI response
  document.getElementById("answerBox").innerText =
    "🤖 AI Answer: This is a sample response for: " + question;
}
