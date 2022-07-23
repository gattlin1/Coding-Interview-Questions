import { checkPermutation } from './check_permutation';

it('return true when the strings are permutations', () => {
  const str1 = 'jimmy';
  const str2 = 'immyj';

  expect(checkPermutation(str1, str2)).toBeTruthy();
});

it("return false when the strings aren't permutations", () => {
  const str1 = 'jimmy';
  const str2 = 'immyt';

  expect(checkPermutation(str1, str2)).toBeFalsy();
});
