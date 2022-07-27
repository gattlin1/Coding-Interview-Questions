export class GraphNode<T> {
  value: T;
  children: GraphNode<T>[];

  constructor(value: T, children: GraphNode<T>[]) {
    this.value = value;
    this.children = children;
  }
}
