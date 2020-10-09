import * as chalk from 'chalk';
import { matchString } from './';

describe('matchString', () => {
  it('should read string from file', () => {
    expect(matchString('test', 'test')).toEqual([false, 'test']);
    expect(matchString('', 'test')).toEqual([true, chalk.green('test')]);
    expect(matchString('tost', 'test')).toEqual([true, `t${chalk.green('e')}st`]);
    expect(matchString('tost', 'tester')).toEqual([true, `t${chalk.green('e')}st${chalk.green('er')}`]);
    expect(matchString('tostr', 'tester')).toEqual([true, `t${chalk.green('e')}st${chalk.green('e')}r`]);
    expect(matchString('toster', 'test')).toEqual([true, `t${chalk.green('e')}st${chalk.red('er')}`]);
  });
});

