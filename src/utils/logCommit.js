/**
 * Logs the commit message based on the selected commit type and user input.
 * @param {Object} selectedCommit - The selected commit type object with `description` and `value` properties.
 * @param {Object} answers - The user's answers from the prompt.
 */
export function logCommit(selectedCommit, answers) {
  try {
    console.log(`⚓️Captain Navi advises you to write the following commit:\n\x1b[37;44mgit commit -m "${selectedCommit.value}: ${answers.subject}"\x1b[0m`);
  } catch (error) {
    console.error("An error occurred while trying to log the commit message:", error);
  }
}