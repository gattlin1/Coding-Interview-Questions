import { Node } from '../bsUtil';
import { firstCommonAncestor } from './first_common_ancestor';

it('finds the first common ancestor', () => {
  //                 5
  //             2      8
  //           1  3   6   9
  //               4   7   10
  const tree = new Node(
    5,
    new Node(2, new Node(1), new Node(3, null, new Node(4))),
    new Node(8, new Node(6, null, new Node(7)), new Node(9, null, new Node(10)))
  );

  const ancestor = firstCommonAncestor(tree, 1, 3);

  expect(ancestor?.value).toBe(2);
});

it('finds the root common ancestor', () => {
  //                 5
  //             2      8
  //           1  3   6   9
  //               4   7   10
  const tree = new Node(
    5,
    new Node(2, new Node(1), new Node(3, null, new Node(4))),
    new Node(8, new Node(6, null, new Node(7)), new Node(9, null, new Node(10)))
  );

  const ancestor = firstCommonAncestor(tree, 4, 7);

  expect(ancestor?.value).toBe(5);
});
