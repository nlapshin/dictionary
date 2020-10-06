import * as commander from 'commander';
import { DBTest } from '../test';

const program = new commander.Command();
const dbTest = new DBTest();

(async () => {
  program
    .command('database:test:init')
    .action(dbTest.init.bind(dbTest));

  try {
    await program.parseAsync(process.argv);
  } catch(err) {
    // tslint:disable-next-line: no-console
    console.error(err);
  }
})();
