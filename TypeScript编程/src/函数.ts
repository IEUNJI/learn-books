/**
 * 函数this类型
 */
export function fancyDate(this: Date) {
  return `${this.getDate()}/${this.getMonth()}/${this.getFullYear()}`;
}

fancyDate.call(new Date());

/**
 * 函数类型重载
 */

// 简写
type Log1 = (message: string, userId?: string) => void;
// 完整
type Log2 = {
  (message: string, userId?: string): void;
  wasCalled: boolean;
};

/**
 * 泛型
 */

// 调用函数时为T绑定具体类型
type Filter1 = {
  <T>(array: T[], f: (item: T) => boolean): T[];
};

// 使用类型时为T绑定具体类型
type Filter2<T> = {
  (array: T[], f: (item: T) => boolean): T[];
};

type Map1 = {
  <T, U>(array: T[], f: (item: T) => U): U[];
};

type Map2<T, U> = {
  (array: T[], f: (item: T) => U): U[];
};

/**
 * 泛型约束
 */
type TreeNode = {
  value: string
};
type LeafNode = TreeNode & {
  isLeaf: true
};
type InnerNode = TreeNode & {
  children: [TreeNode] | [TreeNode, TreeNode]
};

// T的上限为TreeNode
function mapNode<T extends TreeNode>(
  node: T,
  f: (value: string) => string
): T {
  return {
    ...node,
    value: f(node.value)
  };
}

/**
 * call
 */
function call<T extends unknown[], R>(
  f: (...args: T) => R,
  ...args: T
): R {
  return f(...args);
}
