import * as commander from 'commander';
import { Quiz } from '../';

const program = new commander.Command();
const quiz = new Quiz();

(async () => {
  program
    .command('quiz:selection')
    .action(quiz.selection.bind(quiz));

  program
    .command('quiz:exam')
    .action(quiz.exam.bind(quiz));

  try {
    await program.parseAsync(process.argv);
  } catch(err) {
    console.error(err);
  }
})();
