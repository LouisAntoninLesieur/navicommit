import { getCommitType } from "../utils/getCommitType.js";
import { logCommit } from "../utils/logCommit.js";
import userPrompt from "./userPrompt.js";

/**
 * Builds and logs a commit message based on user input.
 * @param {Array} commitType - An array of commit type objects with `description` and `value` properties.
 * @returns {Promise<void>} - A promise that resolves when the commit message is logged.
 */
export async function commitBuilder(commitType) {
  const answers = await userPrompt(commitType);
  const selectedCommit = getCommitType(commitType, answers);
  logCommit(selectedCommit, answers);
}