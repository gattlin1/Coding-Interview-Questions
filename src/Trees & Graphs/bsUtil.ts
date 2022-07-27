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
  if (tree1 && tree2) {
    console.log('tree1', tree1.value);
    console.log('tree2', tree2.value);
    let equal = true;
    if (!equalNodes(tree1, tree2)) return false;
    if (tree1.left) equal &&= checkEquality(tree1.left, tree2.left!);
    if (tree1.right) equal &&= checkEquality(tree1.right, tree2.right!);
    return equal;
  }
  console.log('out of loop');
  console.log('tree1', tree1);
  console.log('tree2', tree2);
  if (!tree1 && !tree2) return true;
  return false;
}

function equalNodes(node1: Node<number>, node2: Node<Number>): boolean {
  if ((node1 && !node2) || (!node1 && node2)) return false;
  if (node1.value !== node2.value) return false;
  if ((node1.left && !node1.left) || (!node1.left && node1.left)) return false;
  if ((node1.right && !node1.right) || (!node1.right && node1.right))
    return false;

  return true;
}
