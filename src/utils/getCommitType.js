/**
 * Finds and returns the commit type object based on the user's selected description.
 * @param {Array} commitType - An array of commit type objects with `description` and `value` properties.
 * @param {Object} answers - The user's answers from the prompt.
 * @returns {Object} - An object composed of the selected commit type's `description` and `value`.
 */
export function getCommitType(commitType, answers) {
  try {
    return commitType.find((commit) => commit.description === answers.commitTypeValue);
  } catch (error) {
    console.error("An error occurred while trying to find the commit type:", error);
  }
}