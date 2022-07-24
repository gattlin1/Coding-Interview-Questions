export class Node<T> {
  val: T | undefined;
  next: Node<T> | null;

  constructor(val?: T, next?: Node<T> | null) {
    this.val = val;
    this.next = next === undefined ? null : next;
  }
}

export function checkEquality(
  actual: Node<number> | null,
  expected: Node<number> | null
): boolean {
  let actualCurr = actual;
  let expectedCurr = expected;
  while (actualCurr && expectedCurr) {
    if (actualCurr.val !== expectedCurr.val) {
      return false;
    }
    actualCurr = actualCurr.next;
    expectedCurr = expectedCurr.next;
  }

  return !actualCurr && !expectedCurr;
}
