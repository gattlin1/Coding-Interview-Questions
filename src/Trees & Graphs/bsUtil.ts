export class Node<T> {
  value: T;
  left: Node<T> | null;
  right: Node<T> | null;

  constructor(
    value: T,
    left: Node<T> | null = null,
    right: Node<T> | null = null
  ) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

export function checkEquality(
  tree1: Node<number> | null,
  tree2: Node<number> | null
): boolean {
  if (!tree1 && !tree2) return true;
  if (tree1 && tree2) {
    let equal = true;
    if (!equalNodes(tree1, tree2)) return false;
    if (tree1.left) equal &&= checkEquality(tree1.left, tree2.left!);
    if (tree1.right) equal &&= checkEquality(tree1.right, tree2.right!);
    return equal;
  }

  return false;
}

function equalNodes(node1: Node<number>, node2: Node<Number>): boolean {
  if ((node1 && !node2) || (!node1 && node2)) return false;
  if (node1.value !== node2.value) return false;
  if ((node1.left && !node2.left) || (!node1.left && node2.left)) return false;
  if ((node1.right && !node2.right) || (!node1.right && node2.right))
    return false;

  return true;
}
