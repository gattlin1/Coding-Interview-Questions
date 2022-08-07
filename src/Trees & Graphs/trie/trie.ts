class TrieNode {
  val: string;
  private children: Map<string, TrieNode>;

  constructor(val: string) {
    this.val = val;
    this.children = new Map();
  }

  addChild(child: string) {
    this.children.set(child, new TrieNode(child));
  }

  hasChild(child: string): boolean {
    return this.children.has(child);
  }

  getChild(child: string): TrieNode | null {
    const childNode = this.children.get(child);
    return childNode ? childNode : null;
  }
}

class Trie {
  private head: TrieNode;

  constructor() {
    this.head = new TrieNode('*');
  }

  insert(word: string): void {
    let curr = this.head;
    let i = 0;
    while (i < word.length && curr.hasChild(word[i])) {
      curr = curr.getChild(word[i]);
      i++;
    }

    for (; i < word.length; i++) {
      curr.addChild(word[i]);
      curr = curr.getChild(word[i]);
    }

    curr.addChild('*');
  }

  search(word: string): boolean {
    let curr = this.head;
    for (const char of word) {
      if (!curr.hasChild(char)) return false;
      curr = curr.getChild(char);
    }
    return curr.hasChild('*');
  }

  startsWith(prefix: string): boolean {
    let curr = this.head;
    let i = 0;
    for (; i < prefix.length; i++) {
      if (!curr.hasChild(prefix[i])) return false;
      curr = curr.getChild(prefix[i]);
    }

    return i === prefix.length;
  }
}
