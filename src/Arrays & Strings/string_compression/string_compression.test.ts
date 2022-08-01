import { stringCompression } from './string_compression';

it('compresses a string', () => {
  const word = 'aabccccaaa';
  const expected = 'a5b1c4';

  expect(stringCompression(word)).toBe(expected);
});
