import { isUnique } from './is_unique';

it('return false when string has duplicates', () => {
  const str = 'abcda';

  expect(isUnique(str)).toBeFalsy();
});

it('return true when string has all unique characters', () => {
  const str = 'abcdef';

  expect(isUnique(str)).toBeTruthy();
});
