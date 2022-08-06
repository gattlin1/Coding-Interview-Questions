import { SetOfStacks } from './stack_of_plates/stack_of_plates';

it('adds stacks when a stack has reached capacity', () => {
  const setOfStacks: SetOfStacks<number> = new SetOfStacks(1);

  setOfStacks.push(10);
  setOfStacks.push(20);

  expect(setOfStacks.stackCount()).toBe(2);
});

it('removes stacks when a stack is now empty', () => {
  const setOfStacks: SetOfStacks<number> = new SetOfStacks(1);

  setOfStacks.push(10);
  setOfStacks.push(20);

  setOfStacks.pop();

  expect(setOfStacks.stackCount()).toBe(1);
});

it('popping from a stack returns the reverse order they were stacked', () => {
  const setOfStacks: SetOfStacks<number> = new SetOfStacks(1);

  setOfStacks.push(10);
  setOfStacks.push(20);

  expect(setOfStacks.pop()).toBe(20);
  expect(setOfStacks.pop()).toBe(10);
});

it('adds to same stack when the stack still has capacity', () => {
  const setOfStacks: SetOfStacks<number> = new SetOfStacks(5);

  setOfStacks.push(10);
  setOfStacks.push(20);

  expect(setOfStacks.stackCount()).toBe(1);

  setOfStacks.push(30);
  setOfStacks.push(40);
  setOfStacks.push(50);
  setOfStacks.push(60);

  expect(setOfStacks.stackCount()).toBe(2);
});
