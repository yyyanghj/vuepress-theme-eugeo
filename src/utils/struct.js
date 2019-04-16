export class Stack {
  constructor() {
    this.list = [];
  }

  push(val) {
    return this.list.push(val);
  }

  pop() {
    return this.list.pop();
  }

  get top() {
    return this.list[this.length - 1];
  }

  get length() {
    return this.list.length;
  }
}

export class Node {
  constructor(data) {
    this.value = data;
    this.children = [];
  }
}

export class Tree {
  constructor(headers) {
    const nodeStack = new Stack();
    const root = new Node({ value: { level: 0, root: true }, children: [] });
    nodeStack.push(root);

    for (const header of headers) {
      const node = new Node(header);
      const level = nodeStack.top.value.level;
      if (header.level === level) {
        nodeStack.pop(); // 兄弟
      } else if (header.level < level) {
        // 父亲的兄弟
        nodeStack.pop();
        nodeStack.pop();
      }
      nodeStack.top.children.push(node);
      nodeStack.push(node);
    }

    return root;
  }
}
