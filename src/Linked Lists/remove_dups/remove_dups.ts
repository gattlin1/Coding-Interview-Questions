import { Node } from '../util';

export function removeDups(head: Node<number> | null): Node<number> | null {
  if (!head) return null;
  if (!head.next) return head;

  const duplicates: Map<number, boolean> = new Map();
  let prev = head;
  let curr: Node<number> | null = head.next;

  while (curr) {
    const next: Node<number> | null = curr.next;

    if (duplicates.has(curr.val!)) {
      prev.next = next;
    } else {
      duplicates.set(curr.val!, true);
      prev = curr;
    }

    curr = next;
  }

  return head;
}
