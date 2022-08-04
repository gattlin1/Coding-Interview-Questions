import { Node } from '../bsUtil';
import { listOfDepths } from './list_of_depths';

it('returns a list of nodes at each level', () => {
  //                 5
  //             2      8
  //           1  3   6   9
  //               4   7   10
  const tree = new Node(
    5,
    new Node(2, new Node(1), new Node(3, null, new Node(4))),
    new Node(8, new Node(6, null, new Node(7)), new Node(9, null, new Node(10)))
  );

  const result = listOfDepths(tree);
  expect(result.length).toBe(4);
});

it('returns the list of nodes in the correct order', () => {
  //                 5
  //             2      8
  //           1  3   6   9
  //               4   7   10
  const tree = new Node(
    5,
    new Node(2, new Node(1), new Node(3, null, new Node(4))),
    new Node(8, new Node(6, null, new Node(7)), new Node(9, null, new Node(10)))
  );

  const result = listOfDepths(tree);
  const expectedVals = [[5], [2, 8], [1, 3, 6, 9], [4, 7, 10]];

  result.forEach((nodeList, i) => {
    expect(nodeList.length).toBe(expectedVals[i].length);

    nodeList.forEach((node, j) => {
      expect(node.value).toBe(expectedVals[i][j]);
    });
  });
});

it('handles an empty tree', () => {
  const tree = null;

  expect(listOfDepths(tree).length).toBe(0);
});
