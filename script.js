function getAnswer(q) {
  try {
    // Convert to lowercase
    q = q.toLowerCase();

    // Remove words and symbols
    let cleaned = q.replace(/[^0-9+\-*/().]/g, "");

    // If nothing valid
    if (!cleaned) {
      return "Please ask a valid math question!";
    }

    // Calculate safely
    let result = Function('"use strict";return (' + cleaned + ')')();

    return result;

  } catch (error) {
    return "Sorry, I couldn't calculate that.";
  }
}
