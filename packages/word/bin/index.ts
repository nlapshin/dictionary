import * as commander from 'commander';
import { Word } from '../';

const program = new commander.Command();
const word = new Word();

(async () => {
  program
    .command('quiz:selection')
    .action(word.quiz.selection.bind(word.quiz));

  program
    .command('quiz:exam')
    .action(word.quiz.exam.bind(word.quiz));

  try {
    await program.parseAsync(process.argv);
  } catch(err) {
    console.error(err);
  }
})();
