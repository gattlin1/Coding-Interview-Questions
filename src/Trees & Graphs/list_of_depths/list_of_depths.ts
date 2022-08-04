import { Node } from '../bsUtil';

export function listOfDepths(head: Node<number> | null): Node<number>[][] {
  if (!head) return [];
  const nodeList: Node<number>[][] = [];
  let nodesAtLevel: Node<number>[] = [head];

  while (nodesAtLevel.length > 0) {
    nodeList.push(nodesAtLevel.slice());

    const nextLevelNodes: Node<number>[] = [];
    for (const node of nodesAtLevel) {
      if (node.left) nextLevelNodes.push(node.left);
      if (node.right) nextLevelNodes.push(node.right);
    }

    nodesAtLevel = nextLevelNodes;
  }

  return nodeList;
}
