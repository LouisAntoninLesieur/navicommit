import inquirer from "inquirer";

/**
 * Prompts the user to select a commit type and provide a commit message.
 * @param {Array} commitType - An array of commit type objects with `description` and `value` properties.
 * @returns {Promise<Object>} - A promise that resolves with the user's answers.
 */
export default async function userPrompt(commitType) {
  const answers = await inquirer.prompt([
    {
      type: "list",
      name: "commitTypeValue",
      message: "Select the description that best suits the changes you have made:",
      choices: commitType.map((commit) => commit.description),
    },
    {
      type: "input",
      name: "subject",
      message: "Provide a brief, imperative description of the changes:",
    },
  ]);

  return answers;
}
