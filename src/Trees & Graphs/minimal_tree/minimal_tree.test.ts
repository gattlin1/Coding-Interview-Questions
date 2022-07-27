import { checkEquality, Node } from '../bsUtil';
import { minimalTree } from './minimal_tree';

it('creates a min height tree', () => {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const minTree = minimalTree(list);

  //                 5
  //             2      8
  //           1  3   6   9
  //               4   7   10
  const expected = new Node(
    5,
    new Node(2, new Node(1), new Node(3, null, new Node(4))),
    new Node(8, new Node(6, null, new Node(7)), new Node(9, null, new Node(10)))
  );
  expect(checkEquality(minTree, expected)).toBeTruthy();
});
