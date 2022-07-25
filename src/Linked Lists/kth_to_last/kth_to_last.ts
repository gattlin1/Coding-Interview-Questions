import { Node } from '../util';

export function kthToLast(
  head: Node<number> | null,
  k: number
): Node<number> | null {
  if (!head) return head;

  let slow = head;
  let fast = head;

  for (let i = 0; i < k; i++) {
    if (fast.next) {
      fast = fast.next;
    } else {
      return null; // if k is bigger than the list then we return null
    }
  }

  while (fast.next) {
    fast = fast.next;
    slow = slow.next!;
  }

  return slow;
}
