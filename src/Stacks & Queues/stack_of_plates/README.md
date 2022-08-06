# Stack of Plates

Imagine a stack of plates. If the stack gets too high, it might topple. Therefore, in real life, we would likely start a new stack when the previous stack exceeds capacity. Create a data structure that mimics this.

My approach: I think it would be best to create an individual stack data structure. This way it can handle its own methods for the push() and pop(). Then the wrapper data structure will wrap this. It will have an internal member that is an array of these stacks. This is where we will handle the overall logic of adding and removing new stacks.
