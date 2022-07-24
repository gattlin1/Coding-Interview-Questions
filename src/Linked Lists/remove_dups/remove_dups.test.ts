import { Node, checkEquality } from '../util';
import { removeDups } from './remove_dups';

it('does nothing if list is empty', () => {
  expect(removeDups(null)).toBeFalsy();
});

it('handles one node in the list', () => {
  const head = new Node(12);
  const expected = new Node(12);

  removeDups(head);

  expect(checkEquality(head, expected)).toBeTruthy();
});

it('handles a duplicate node in the list', () => {
  const head = new Node(1, new Node(2, new Node(3, new Node(2, new Node(4)))));
  const expected = new Node(1, new Node(2, new Node(3, new Node(4))));

  removeDups(head);

  expect(checkEquality(head, expected)).toBeTruthy();
});

it('handles a duplicate nodes in the list at the end', () => {
  const head = new Node(1, new Node(2, new Node(3, new Node(4, new Node(4)))));
  const expected = new Node(1, new Node(2, new Node(3, new Node(4))));

  removeDups(head);

  expect(checkEquality(head, expected)).toBeTruthy();
});

it('handles multiple duplicate nodes in the list', () => {
  const head = new Node(1, new Node(2, new Node(2, new Node(2, new Node(4)))));
  const expected = new Node(1, new Node(2, new Node(4)));

  removeDups(head);

  expect(checkEquality(head, expected)).toBeTruthy();
});

it('handles no duplicate nodes in the list', () => {
  const head = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5)))));
  const expected = new Node(
    1,
    new Node(2, new Node(3, new Node(4, new Node(5))))
  );

  removeDups(head);

  expect(checkEquality(head, expected)).toBeTruthy();
});
