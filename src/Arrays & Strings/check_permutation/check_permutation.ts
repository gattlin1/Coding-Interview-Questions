export function checkPermutation(str1: string, str2: string): boolean {
  if (str1.length !== str2.length) return false;
  const str1Chars: Map<string, number> = new Map();
  const str2Chars: Map<string, number> = new Map();

  for (let i = 0; i < str1.length; i++) {
    str1Chars.set(str1[i], str1Chars.get(str1[i])! + 1 || 1);
    str2Chars.set(str2[i], str2Chars.get(str2[i])! + 1 || 1);
  }

  for (const [char, frequency] of str1Chars.entries()) {
    if (frequency !== str2Chars.get(char)) {
      return false;
    }
  }

  return true;
}
