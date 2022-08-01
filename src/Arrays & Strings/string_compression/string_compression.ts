export function stringCompression(word: string): string {
  const frequencies: Map<string, number> = new Map();
  for (const char of word) {
    frequencies.set(char, frequencies.get(char)! + 1 || 1);
  }

  let str = [];
  for (const [char, frequency] of [...frequencies].sort()) {
    str.push(char, frequency);
  }

  return str.join('');
}
