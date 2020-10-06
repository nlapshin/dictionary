import { existsSync, readFileSync } from 'fs';

export function readStringFromFileSync(filePath: string): string {
  return filePath && existsSync(filePath) ? readFileSync(filePath).toString().trim() : null;
}
