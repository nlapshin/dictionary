import * as commander from 'commander';
import { DBTest } from '../database/test';
import { QuizWord } from '../target';

const program = new commander.Command();
const dbTest = new DBTest();
const quizWord = new QuizWord();

(async () => {
  program
    .command('database:test:init')
    .action(dbTest.init.bind(dbTest));

  program
    .command('quiz:word:selection')
    .action(quizWord.selection.bind(quizWord));

  program
    .command('quiz:word:exam')
    .action(quizWord.exam.bind(quizWord));

  try {
    await program.parseAsync(process.argv);
  } catch(err) {
    // tslint:disable-next-line: no-console
    console.error(err);
  }
})();
