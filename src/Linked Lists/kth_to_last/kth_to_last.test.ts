import { checkEquality, Node } from '../util';
import { kthToLast } from './kth_to_last';

it('returns kth to last node', () => {
  const list = new Node(1, new Node(2, new Node(3, new Node(2, new Node(4)))));
  const k = 1;

  const actual = kthToLast(list, k);
  const expected = new Node(2, new Node(4));

  expect(checkEquality(actual, expected)).toBeTruthy();
});

it('returns null when k is bigger than the list', () => {
  const list = new Node(1, new Node(2, new Node(3, new Node(2, new Node(4)))));
  const k = 5;

  const actual = kthToLast(list, k);
  const expected = null;

  expect(checkEquality(actual, expected)).toBeTruthy();
});

it('returns null if there is no list', () => {
  const list = null;
  const k = 0;

  const actual = kthToLast(list, k);
  const expected = null;

  expect(checkEquality(actual, expected)).toBeTruthy();
});
