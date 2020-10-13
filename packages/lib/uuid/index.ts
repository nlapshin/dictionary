import * as hyperid from 'hyperid';

const generator = hyperid();

export function uuid() {
  return generator();
}
