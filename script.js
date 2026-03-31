function getAnswer(q) {
  try {
    // Lowercase
    q = q.toLowerCase();

    // Extract valid math expression
    let cleaned = q.replace(/[^0-9+\-*/().]/g, "");

    // Remove trailing operators (IMPORTANT FIX)
    cleaned = cleaned.replace(/[+\-*/.]+$/, "");

    if (!cleaned) {
      return "Please enter a valid math expression!";
    }

    // Calculate
    let result = eval(cleaned);

    // Check if result is valid number
    if (isNaN(result)) {
      return "Invalid calculation!";
    }

    return result;

  } catch (error) {
    return "Error in calculation!";
  }
}
