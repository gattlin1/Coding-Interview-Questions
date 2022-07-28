import { Node } from '../bsUtil';

export function firstCommonAncestor(
  root: Node<number>,
  val1: number,
  val2: number
): Node<number> | null {
  let curr: Node<number> | null = root;

  while (curr) {
    if (curr.value < val1 && curr.value < val2) {
      curr = curr.right;
    } else if (curr.value > val1 && curr.value > val2) {
      curr = curr.left;
    } else return curr;
  }

  return null;
}
