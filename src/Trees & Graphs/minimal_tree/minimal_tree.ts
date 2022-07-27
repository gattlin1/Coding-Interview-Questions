import { Node } from '../bsUtil';

export function minimalTree(list: number[]): Node<number> | null {
  return generateBST(list, 0, list.length - 1);
}

function generateBST(
  list: number[],
  left: number,
  right: number
): Node<number> | null {
  if (left <= right) {
    const middle = Math.floor((left + right) / 2);
    const node = new Node(list[middle]);
    node.left = generateBST(list, left, middle - 1);
    node.right = generateBST(list, middle + 1, right);
    return node;
  }

  return null;
}
