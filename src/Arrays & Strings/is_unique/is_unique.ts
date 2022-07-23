export function isUnique(str: string): boolean {
  const sortedStr = str.split('').sort();
  for (let i = 1; i < sortedStr.length; i++) {
    if (sortedStr[i - 1] === sortedStr[i]) {
      return false;
    }
  }

  return true;
}
