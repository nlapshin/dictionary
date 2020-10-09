import * as commander from 'commander';
import { DBWordTest } from '../database/test';
import { WordQuiz } from '../target';

const program = new commander.Command();
const dbWordTest = new DBWordTest();
const wordQuiz = new WordQuiz();

(async () => {
  program
    .command('word:database:test:init')
    .action(dbWordTest.init.bind(dbWordTest));

  program
    .command('word:quiz:selection')
    .action(wordQuiz.selection.bind(wordQuiz));

  program
    .command('word:quiz:exam')
    .action(wordQuiz.exam.bind(wordQuiz));

  try {
    await program.parseAsync(process.argv);
  } catch(err) {
    // tslint:disable-next-line: no-console
    console.error(err);
  }
})();
