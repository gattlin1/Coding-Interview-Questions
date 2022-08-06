export class SetOfStacks<T> {
  private stacks: Stack<T>[];
  private stackCapacity: number;

  constructor(capacity: number) {
    this.stackCapacity = capacity;
    this.stacks = [new Stack()];
  }

  push(item: T) {
    const currentStack = this.currentStack();
    if (currentStack.count() >= this.stackCapacity) {
      const nextStack: Stack<T> = new Stack();
      nextStack.push(item);
      this.stacks.push(nextStack);
    } else {
      currentStack.push(item);
    }
  }

  pop(): T | undefined {
    const currentStack = this.currentStack();
    const item = currentStack.pop();

    // remove the last stack because it is empty.
    if (currentStack.count() === 0 && this.stacks.length > 1) {
      this.stacks.pop();
    }

    return item;
  }

  stackCount(): number {
    return this.stacks.length;
  }

  private currentStack(): Stack<T> {
    return this.stacks[this.stacks.length - 1];
  }
}

class Stack<T> {
  private items: T[];

  constructor() {
    this.items = [];
  }

  push(item: T) {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  count(): number {
    return this.items.length;
  }
}
