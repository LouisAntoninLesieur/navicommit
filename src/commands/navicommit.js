import { Command } from "commander";
import { commitType } from "../assets/commitType.js";
import { commitBuilder } from "../lib/commitBuilder.js";

const program = new Command();

/**
 * Registers the navicommit command and prompts the user for commit details.
 */
export function navicommit () {
  program
    .command("commit")
    .alias("c")
    .description("Navi helps you to write a commit message.")
    .action(() => {
      commitBuilder(commitType);
    });
  
  program.parse(process.argv);
};
