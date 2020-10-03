import { writeFileSync, unlinkSync } from 'fs';
import { readStringFromFileSync } from './';

describe('readStringFromFileSync', () => {
  it('should read string from file', () => {
    const fileName = '__temporary_file__';
    const str = 'hello world';

    writeFileSync(fileName, str);
    expect(readStringFromFileSync(fileName)).toBe(str);

    unlinkSync(fileName);
  });

  it('should read trim string from file', () => {
    const fileName = '__temporary_file__';
    const str = '  hello world  ';

    writeFileSync(fileName, str);
    expect(readStringFromFileSync(fileName)).toBe(str.trim());

    unlinkSync(fileName);
  });
})

