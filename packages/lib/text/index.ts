import * as chalk from 'chalk';
import * as TextDiff from 'text-diff';

const textDiff = new TextDiff();

export function matchString(str: string, compareStr: string): [boolean, string] {
  const diff = textDiff.main(str, compareStr);

  const error = isDiffError(diff);
  const correct = stringSpelling(diff);

  return [ error, correct ];

  function isDiffError(difference: TextDiff): boolean {
    return (difference.length > 1) || (difference[0][0] !== 0);
  }

  function stringSpelling(difference) {
    return difference.reduce((spellString, [compare, sequince], index) => {
      const hasNext = difference.length !== (index + 1);

      if (compare === 0) {
        return `${spellString}${sequince}`;
      }

      if (compare === 1) {
        return `${spellString}${chalk.green(sequince)}`;
      }

      if (compare === -1 && !hasNext) {
        return `${spellString}${chalk.red(sequince)}`;
      }

      return spellString;
    }, '');
  }
}
